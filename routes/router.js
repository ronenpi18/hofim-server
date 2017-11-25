'use strict';
var express = require('express');
var router = express.Router();
var Beach = require('../models/beach');


// GET route for reading data
router.get('/', function (req, res, next) {
    if(req.header("authorization")){
        console.log("header found:"+req.header("authorization"))
        return res.send('The api is in /v1/api/');
    }

});

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
        req.body.lon &&
        req.body.name &&
        req.body.jellyfish_lvl &&
        req.body.waves_height &&
        req.body.disabilities_status &&
        req.body.blue_flag &&
        req.body.wind_degree &&
        req.body.wind_speed &&
        req.body.water_tmp &&
        req.body.tmp_min &&
        req.body.tmp_max) {

        var BeachData = {
            lat: req.body.lat,
            lon: req.body.lon,
            name: req.body.name,
            jellyfish_lvl: req.body.jellyfish_lvl,
            waves_height: req.body.waves_height,
            disabilities_status: req.body.disabilities_status,
            blue_flag:req.body.blue_flag,
            wind_degree: req.body.wind_degree,
            wind_speed: req.body.wind_speed,
            water_tmp:req.body.water_tmp,
            tmp_min:req.body.tmp_min,
            tmp_max:req.body.tmp_max
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
})



module.exports = router;

