'use strict';
var express = require('express');
var app = express();
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

app.get('/',function (req,res) {
    res.send('The api is in /v1/api/');
})
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
    res.send(err.message);
});

//database handler
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

// listen on port 3000
app.listen(server_port, function () {
    console.log('Express app listening on port 8080 started at:'+ now());
});
var unirest = require('unirest');
var BASE_URL="http://hofim-hofim.7e14.starter-us-west-2.openshiftapps.com";
schedule.scheduleJob({hour: 0, minute: 5}, function(){
    unirest.put(BASE_URL+'/v1/api/update/weather_general/3')
        .headers({'Content-Type': 'application/x-www-form-urlencoded'})
        .send()
        .end(function (response) {
            console.log(response+'\n');
            console.log("db updating....")
        })
});