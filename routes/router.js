'use strict';
var express = require('express');
var router = express.Router();
var Beach = require('../models/beach');
var Backup = require('../models/backup');
var Coordinates = require('../models/coordinates_list');
var unirest = require('unirest');
// var data_handler = require('./src/date_handler');
// var hour = data_handler.get_hour;
// var time = require('time');
// var path    = require("path");
// Create a new Date instance, representing the current instant in time
var now = new time.Date();

// GET route for reading data
router.get('/', function (req, res, next) {
    if(req.header("authorization")){
        console.log("header found:"+req.header("authorization"))
        return res.send('The api is in /v1/api/');
    }
    // res.sendFile('/index.html');
});

//get list of beaches coordinates by GET request with country in query, NOTE: Don't forget the form of return : { "data":[{lon:..,lat:..},{...},{...}...]}}
router.get('/get_beaches_coords_country',function (req,res,next) {
    Coordinates.findOne({
        country:req.query.country
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
       // res.send(array_objs)
        // var json =
        //         JSON.stringify(user);
        //     var j1 = JSON.stringify(json)
        //     j1 = JSON.parse(j1)
        //     j1 = JSON.stringify((JSON.parse(j1))["weather_general"])
        //     j1 = JSON.stringify((JSON.parse(j1)["weather"]))
        //     Beach.findByIdAndUpdate(user._id, {weather_hourly: j1 })
        //         .exec(function (error, beach) {
        //             if (error) {
        //                 next(error);
        //             } else {
        //                 if (beach === null) {
        //                     var err = new Error('Not authorized! Go back!');
        //                     err.status = 400;
        //                     next(err);
        //                 } else {
        //                     console.log("yay");
        //                 }
        //             }
        //         });

        // res.send("good")

        // for(var i=0;i<array_objs.length;i++) {
        //
        //     Beach.findByIdAndUpdate(users[i]._id, {weather_hourly: array_objs[i].weather })
        //         .exec(function (error, beach) {
        //             if (error) {
        //                 next(error);
        //             } else {
        //                 if (beach === null) {
        //                     var err = new Error('Not authorized! Go back!');
        //                     err.status = 400;
        //                     next(err);
        //                 } else {
        //                     console.log("yay");
        //                 }
        //             }
        //         });
        // }
    }).then(function () {
        return res.send("good"+'\n'+JSON.parse(JSON.stringify({data:JSON.stringify(array_objs)})));

    })

});

//enter general data to db
// router.put('/update/weather_general', function (req, res, next) {
//     Beach.find({}, function(err, users) {
//         var userMap = {};
//         var cords_first="'";
//         var cords_sec="'";
//         var counter = 0;
//         var object_location = {lat:0,lon:0}
//         var array_objs =[];
//         users.forEach(function(user) {
//             counter++;
//             if(counter<users.length/2) {
//                 //   console.log(users.length/2)
//                 cords_first += user.lat + ',' + user.lon + ';'
//                 object_location.lat=user.lat;
//                 object_location.lon=user.lon;
//                 array_objs.push(object_location)
//             }
//             if(counter>=users.length/2){
//                 //  console.log(counter);
//                 cords_sec += user.lat + ',' + user.lon + ';'
//
//             }
//         });
//         unirest.post('http://api.worldweatheronline.com/premium/v1/marine.ashx')
//             .headers({'Content-Type': 'application/x-www-form-urlencoded'})
//             .send({ "q": cords_first, "format": 'json' , "key":'62a39ebb20f94c32873132417172611' })
//             .end(function (response) {
//                 for(var i=0;i<array_objs.length;i++){
//                     Beach.findByIdAndUpdate(users[i]._id,{weather_general:response.body.data.area[i]})
//                         .exec(function (error, beach) {
//                             if (error) {
//                                 next(error);
//                             } else {
//                                 if (beach === null) {
//                                     var err = new Error('Not authorized! Go back!');
//                                     err.status = 400;
//                                     next(err);
//                                 } else {
//                                     console.log("yay");
//                                 }
//                             }
//                         });
//                 }
//                 res.send("good")
//                 // array_objs.forEach(function (data,i) {
//                 //     Beach.findOneAndUpdate(data,{weather_general:response.body.data.area[i]})
//                 //         .exec(function (error, beach) {
//                 //             if (error) {
//                 //                 next(error);
//                 //             } else {
//                 //                 if (beach === null) {
//                 //                     var err = new Error('Not authorized! Go back!');
//                 //                     err.status = 400;
//                 //                     next(err);
//                 //                 } else {
//                 //                     console.log((data));
//                 //                 }
//                 //             }
//                 //         });
//                 // })
//             });
//
//         console.log((cords_first+'\n\n'+cords_sec));
//         //});
//     });
//     return res.send("good");
// });

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



router.put('/update/weather_general/3',function(req,res,next){
    var beaches=[];

    Beach.find({}, function(err, users) {
        users.forEach(function(user) {
            unirest.post('http://api.worldweatheronline.com/premium/v1/marine.ashx')
                .headers({'Content-Type': 'application/x-www-form-urlencoded'})
                .send({ "q": user.lat + ',' + user.lon + ';', "format": 'json' , "key":'836085e153a4479fa1c223014172612' })
                .end(function (response) {
                    var data1 = response.body.data;
                    for (var i=0;i<7;i++){
                        delete data1.weather[i].astronomy;
                        for(var k=0;k<8;k++){
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

                    Beach.findByIdAndUpdate(user._id,{weather_general:data1})
                        .exec(function (error, beach) {
                            if (error) {
                                next(error);
                            } else {
                                if (beach === null) {
                                    var err = new Error('Not authorized! Go back!');
                                    err.status = 400;
                                    next(err);
                                } else {
                                    console.log("yay-entered");
                                }
                            }
                        });
                })
        })
    })

    return res.send("done")
})

router.put('/updated/weather/current',function (req,res,next) {
    var now = get_hour();
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
                            console.log("yay-entered");
                        }
                    }
                });
        })
    })
    res.send("done")
})

module.exports = router;