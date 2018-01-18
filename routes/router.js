'use strict';
var express = require('express');
var router = express.Router();
var Beach = require("../models/beach");
var Backup = require("../models/backup");
var Coordinates = require("../models/coordinates_list");
var unirest = require('unirest');

// var data_handler = require('./src/date_handler');
// var hour = data_handler.get_hour;
// var time = require('time');
// var path    = require("path");
// Create a new Date instance, representing the current instant in time
// var now = new time.Date();

// GET route for reading data
// router.get('/', function (req, res, next) {
//     if(req.header("authorization")){
//         console.log("header found:"+req.header("authorization"))
//         return res.send('The api is in /v1/api/');
//     }
//     // res.sendFile('/index.html');
// });


//get list of beaches coordinates by GET request with country in query, NOTE: Don't forget the form of return : { "data":[{lon:..,lat:..},{...},{...}...]}}
router.get('/get_beaches_coords_country',function (req,res,next) {
    Coordinates.findOne({
        country:"Israel"
    },
        function (err,obj) {
            res.send(JSON.parse(obj['data']))
        })
})


//localhost:3000/v1/api/get_full_beach?lat=345.343&lon=345.567
router.get('/get_full_beach',function(req,res,next){
    Beach.findOne({
            lat: req.query.lat,
            lon:req.query.lon
        },
        function(err,obj) {
            res.send(obj);
        });
});

//localhost:3000/v1/api/get_data_by_id?_id=5a1966ebf2b117025c7795f9&question=disabilities_status
router.get('/get_data_by_id',function(req,res,next){
    Beach.findOne({
            _id: req.query._id
        },
        function(err,obj) {
        var returned = req.query.question;
            res.send(obj[returned].toString());
        });
});

// //get current weather by coordinates
// router.post('/current/weather',function (req,res,next) {
//
// })

//update field datastring
router.put('/update/tmp', function (req, res, next) {
    var update_data = {
        tmp_max:req.body.tmp_max,
        tmp_min:req.body.tmp_min
    }
    Beach.findByIdAndUpdate(req.body._id,update_data)
        .exec(function (error, beach) {
            if (error) {
                return next(error);
            } else {
                if (beach === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {

                    return res.send("yay")
                }
            }
        });
});

//
// router.put('/update/report_jellyfish', function (req, res, next) {
//     var update_data = {
//         report_jellyfish:req.body.report_jellyfish
//     };
//     Beach.findByIdAndUpdate(req.body._id,update_data)
//         .exec(function (error, beach) {
//             if (error) {
//                 return next(error);
//             } else {
//                 if (beach === null) {
//                     var err = new Error('Not authorized! Go back!');
//                     err.status = 400;
//                     return next(err);
//                 } else {
//
//                     return res.send("yay")
//                 }
//             }
//         });
// });

//localhost:3000/v1/api/update/disabilities_status
router.put('/update/disabilities_status', function (req, res, next) {
    var update_data = {
        disabilities_status:req.body.disabilities_status
    }
    Beach.findByIdAndUpdate(req.body._id,update_data)
        .exec(function (error, beach) {
            if (error) {
                return next(error);
            } else {
                if (beach === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {

                    return res.send("yay")
                }
            }
        });
});
//localhost:3000/v1/api/update/disabilities_status
router.put('/update/disabilities_status', function (req, res, next) {
    var update_data = {
        disabilities_status:req.body.disabilities_status
    }
    Beach.findByIdAndUpdate(req.body._id,update_data)
        .exec(function (error, beach) {
            if (error) {
                return next(error);
            } else {
                if (beach === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {

                    return res.send("yay")
                }
            }
        });
});

router.put('/update/blue_flag', function (req, res, next) {
    var update_data = {
        disabilities_status:req.body.disabilities_status
    };
    Beach.findByIdAndUpdate(req.body._id,update_data)
        .exec(function (error, beach) {
            if (error) {
                return next(error);
            } else {
                if (beach === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {

                    return res.send("yay")
                }
            }
        });
});

//POST route for updating data
router.post('/add', function (req, res, next) {
    // confirm that Beach typed same password twice

    if (req.body.lat &&
        req.body.lon ) {

        var BeachData = {
            lat: req.body.lat,
            lon: req.body.lon,
            name: req.body.name,
           // jellyfish_lvl: req.body.jellyfish_lvl,
            disabilities_status: req.body.disabilities_status,
            blue_flag:req.body.blue_flag,
            city:req.body.city,
            //time_zone:req.body.time_zone,
            //report_jellyfish:req.body.report_jellyfish
        }

        Beach.create(BeachData, function (error, Beach) {
            if (error) {
                return next(error);
            } else {
                return res.send("ok got it");
            }
        });

    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
});



//POST route for updating data
router.post('/add_coords', function (req, res, next) {
    // confirm that Beach typed same password twice

    if (req.body.arrayCoordinates) {

        var Coordinates_list_data = {
            data: req.body.arrayCoordinates
        }

        Coordinates.create(Coordinates_list_data, function (error, coor) {
            if (error) {
                return next(error);
            } else {
                return res.send("ok m8");
            }
        });

    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
});


router.put('/update/weather_hourly',function(req,res,next){
    var hour_now = get_hour();
    var array_objs =[];
    Beach.find({}, function(err, users){
        users.forEach(function(user) {
            array_objs.push(user._doc.weather_general)
        })

    }).then(function () {
        return res.send("good"+'\n'+JSON.parse(JSON.stringify({data:JSON.stringify(array_objs)})));

    })

});


//TODO refactor
function get_hour() {
    var date = new Date();
    var now_hour = date.getHours();
    if(now_hour>=0 && now_hour<3){
        return 0;
    }
    if(now_hour>=3 && now_hour<6){
        return 1;
    }
    if(now_hour>=6 && now_hour<9){
        return 2;
    }
    if(now_hour>=9 && now_hour<12){
        return 3;
    }
    if(now_hour>=12 && now_hour<15){
        return 4;
    }
    if(now_hour>=15 && now_hour<18){
        return 5;
    }
    if(now_hour>=18 && now_hour<21){
        return 6;
    }
    if(now_hour>=21 && now_hour<24){
        return 7;
    }
    return null;
    // { seconds: 38,
    //   minutes: 7,
    //   hours: 23,
    //   dayOfMonth: 10,
    //   month: 2,
    //   year: 111,
    //   dayOfWeek: 4,
    //   dayOfYear: 68,
    //   isDaylightSavings: false,
    //   gmtOffset: -28800,
    //   timezone: 'PST' }


}
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


var a = function() {
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
}

router.get('/ok/test/1',function (req,res) {
    a();
    res.send("ok")
    res.statusCode(200);

})


router.put('/update/weather_general/3/test',function(req,res,next){
    var beaches=[];
    var counter=0;
    Beach.find({lat:32.017448,lon:34.738196}, function(err, users) {
        users.forEach(function(user) {
            unirest.post('http://api.worldweatheronline.com/premium/v1/marine.ashx')
                .headers({'Content-Type': 'application/x-www-form-urlencoded'})
                .send({ "q": user.lat + ',' + user.lon + ';', "format": 'json' , "key":'836085e153a4479fa1c223014172612' })
                .end(function (response) {
                    try {
                        var data1 = response.body.data;
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

                        Beach.findByIdAndUpdate(user._id, {weather_general: data1})
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
                                        if (counter < 138) {
                                            counter++;
                                        }
                                        else {
                                            console.log("entered: " + counter);
                                            counter = 0;

                                            return res.send("done");
                                        }
                                    }
                                }
                            });
                    }catch (e){
                        console.log(user);
                    }
                })
        })
        return res.send()
    })
    return res.send("done")
})



router.put('/updated/weather/current',function (req,res,next) {
    var now = get_hour();
    var counter=0;

    Beach.find({}, function(err, users) {
        users.forEach(function(user) {
            // for(var i=0;i<7)
            var hourly_array = user.weather_general[0].weather[0].hourly[now]
            Beach.findByIdAndUpdate(user._id,{weather_hourly:hourly_array})
                .exec(function (error, beach) {
                    if (error) {
                        next(error);
                    } else {
                        if (beach === null) {
                            var err = new Error('Not authorized! Go back!');
                            err.status = 400;
                            next(err);
                        } else {
                            if(counter<138){
                                counter++;
                            }
                            else{
                                console.log("entered: "+counter);
                                counter=0;

                                return res.send("done");
                            }                        }
                    }
                });
        })
    })
    res.send("done")
})
router.put('/updated/weather/current1',function (req,res,next) {
    var now = get_hour();
    var counter=0;

    Beach.find({}, function(err, users) {
        users.forEach(function(user) {
            // for(var i=0;i<7)
            var hourly_array = user.weather_general[0].weather[1].hourly[now]
            Beach.findByIdAndUpdate(user._id,{weather_hourly:hourly_array})
                .exec(function (error, beach) {
                    if (error) {
                        next(error);
                    } else {
                        if (beach === null) {
                            var err = new Error('Not authorized! Go back!');
                            err.status = 400;
                            next(err);
                        } else {
                            if(counter<138){
                                counter++;
                            }
                            else{
                                console.log("entered: "+counter);
                                counter=0;

                                return res.send("done");
                            }                        }
                    }
                });
        })
    })
    res.send("done")
})

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;

    var dLat = degreesToRadians(lat2-lat1);
    var dLon = degreesToRadians(lon2-lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (earthRadiusKm * c) <= 0.5; //radius
}

// console.log(distanceInKmBetweenEarthCoordinates(32.119277, 34.782073, 32.079671, 34.766260));

router.post('/report',function (req,res,next) {
    var kind = req.body.kind;
    var level = req.body.lvl;
    var location = req.body.locationObj; //current user's location

    var test = req.body.test1; // beaches
    //TODO rename request params
    function jellyFishReportHandler(location, test, level) {
        
    }

    function FlagReportHandler(location, level) {
        
    }

    //TODO automation for reports.
    switch (kind){ //add cases for report
        case 0:
            jellyFishReportHandler(location,test,level);
            res.send({kind:"Jellyfish",status_num:0,lvl:level});
            break;
        case 1:
            FlagReportHandler(location,level);
            res.send({kind:"Flag",status_num:1,lvl:level});
            break;
        default:
            res.status(400);
            break;
    }
    //res.send((distanceInKmBetweenEarthCoordinates(location.lat, location.lon, test.lat, test.lon)));

})



module.exports = router;