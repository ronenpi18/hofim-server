'use strict';
var express = require('express');
var app = express();
var path    = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var routes = require("./routes/router");
var now = require('date-now');
var Beach = require("./models/beach.js");
var schedule = require('node-schedule');
 var PORT = process.env.PORT || 8080;
//connect to MongoDB
mongoose.connect('mongodb://ronenpi18:wigitechDB@cluster0-shard-00-00-n9k3j.mongodb.net:27017,cluster0-shard-00-01-n9k3j.mongodb.net:27017,cluster0-shard-00-02-n9k3j.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

//use sessions for tracking logins
app.use(session({
    secret: 'wigitech hofim db',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});
// include routes
app.use('/v1/api', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    // res.send(err.message);
});

//database handler
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080 || process.env.PORT;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// listen on port 3000
app.listen(server_port, function () {
    console.log('Express app listening on port'+ server_port+'started at:'+ now());
});
var unirest = require('unirest');
var BASE_URL="http://hofim-hofim1.7e14.starter-us-west-2.openshiftapps.com";

/**
 *
 * @param user
 * @param callback
 */
function requestExc(user, callback) {
    unirest.post('http://api.worldweatheronline.com/premium/v1/marine.ashx')
        .headers({'Content-Type': 'application/x-www-form-urlencoded'})
        .send({ "q": user.lat + ',' + user.lon + ';', "format": 'json' , "key":'3fbb73e6022f4776a56142908161810' })
        .end(function (res) {
            if (res.error) {
                console.log('GET error', res.error)
                callback(res.error, null)
            } else {
                if(res.body.data) {
                    console.log('GET response', res.body)
                    callback(null, res.body)
                }else{
                    setTimeout(function() {
                        console.log('GET response', res.body)
                        callback(null, res.body)
                    }, 200);
                }
            }
        })
}


var update_daily = function() {
    var beaches = [];
    var counter = 0;
    Beach.find({}, function (err, users) {
        users.forEach(function (user) {
            var response = requestExc(user, function (error, res1) {
                // console.log("date array is " + dateArray)
                if (error === null) {
                    // respondToSender(res["rate"], res["date"], sender, queryDict)
                    try {
                        var data1 = res1.data;
                        for (var i = 0; i < 5; i++) {
                            delete data1.weather[i].astronomy;
                            for (var k = 0; k < 8; k++) {
                                delete data1.weather[i].hourly[k].waterTemp_F
                                delete data1.weather[i].hourly[k].FeelsLikeF
                                delete data1.weather[i].hourly[k].WindGustMiles
                                delete data1.weather[i].hourly[k].WindChillF
                                delete data1.weather[i].hourly[k].DewPointF
                                delete data1.weather[i].hourly[k].HeatIndexF
                                delete data1.weather[i].hourly[k].weatherIconUrl
                                delete data1.weather[i].hourly[k].windspeedMiles
                                delete data1.weather[i].hourly[k].tempF
                            }
                        }

                        Beach.findByIdAndUpdate(user._id, {$set: {'weather_general': data1}})
                            .exec(function (error, beach) {
                                if (error) {
                                    next(error);
                                } else {
                                    if (beach === null) {
                                        var err = new Error('Not authorized! Go back!');
                                        err.status = 400;
                                        next(err);
                                    } else {
                                        //console.log("yay-entered");
                                        if (counter < 136) {
                                            counter++;
                                        }
                                        else {
                                            console.log("entered: " + counter);
                                            counter = 0;

                                            //return res.send("done");
                                        }
                                    }
                                }
                            });
                    } catch (e) {
                        console.log(user && e);
                        // return res.send();
                    }
                } else {
                    console.log("check ur callback function")
                    // sendTextMessage(sender, "Imi pare rau, dar am intimpinat o problema in comunicarea cu BNR")
                }
            })
            // unirest.post('http://api.worldweatheronline.com/premium/v1/marine.ashx')
            //     .headers({'Content-Type': 'application/x-www-form-urlencoded'})
            //     .send({ "q": user.lat + ',' + user.lon + ';', "format": 'json' , "key":'836085e153a4479fa1c223014172612' })
            //     .end(function (response) {
            //
            //     })
        })
        return console.log('1');
    })
    return console.log('0')
};

schedule.scheduleJob({hour: 2, minute:5}, function(){
    update_daily();

});


// console.log(JSON.stringify(Request));

schedule.scheduleJob({hour: 3, minute: 1}, function(){
    unirest.put(BASE_URL+'/v1/api/updated/weather/current')
        .headers({'Content-Type': 'application/x-www-form-urlencoded'})
        .send()
        .end(function (response) {
            console.log(response+'\n');
            console.log("db updating....")
        })
});
schedule.scheduleJob({hour: 6, minute: 1}, function(){
    unirest.put(BASE_URL+'/v1/api/updated/weather/current')
        .headers({'Content-Type': 'application/x-www-form-urlencoded'})
        .send()
        .end(function (response) {
            console.log(response+'\n');
            console.log("db updating....")
        })
});
schedule.scheduleJob({hour: 9, minute: 1}, function(){
    unirest.put(BASE_URL+'/v1/api/updated/weather/current')
        .headers({'Content-Type': 'application/x-www-form-urlencoded'})
        .send()
        .end(function (response) {
            console.log(response+'\n');
            console.log("db updating....")
        })
});
schedule.scheduleJob({hour: 12, minute: 1}, function(){
    unirest.put(BASE_URL+'/v1/api/updated/weather/current')
        .headers({'Content-Type': 'application/x-www-form-urlencoded'})
        .send()
        .end(function (response) {
            console.log(response+'\n');
            console.log("db updating....")
        })
});
schedule.scheduleJob({hour: 15, minute: 1}, function(){
    unirest.put(BASE_URL+'/v1/api/updated/weather/current')
        .headers({'Content-Type': 'application/x-www-form-urlencoded'})
        .send()
        .end(function (response) {
            console.log(response+'\n');
            console.log("db updating....")
        })
});
schedule.scheduleJob({hour: 18, minute: 1}, function(){
    unirest.put(BASE_URL+'/v1/api/updated/weather/current')
        .headers({'Content-Type': 'application/x-www-form-urlencoded'})
        .send()
        .end(function (response) {
            console.log(response+'\n');
            console.log("db updating....")
        })
});
schedule.scheduleJob({hour: 21, minute: 1}, function(){
    unirest.put(BASE_URL+'/v1/api/updated/weather/current')
        .headers({'Content-Type': 'application/x-www-form-urlencoded'})
        .send()
        .end(function (response) {
            console.log(response+'\n');
            console.log("db updating....")
        })
});
schedule.scheduleJob({hour: 0, minute: 10}, function(){
    unirest.put(BASE_URL+'/v1/api/updated/weather/current1')
        .headers({'Content-Type': 'application/x-www-form-urlencoded'})
        .send()
        .end(function (response) {
            console.log(response+'\n');
            console.log("db updating....")
        })
});

