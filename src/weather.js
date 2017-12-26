
var data_ = require('./date_handler');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
var Get_current_time = data_.get_current_time;
var get_tomorrow_time = data_.get_tomorrow_time;
var monipulation_data_first = data_.monipulation_data_first;
var Get_data_from_api = data_.get_data;
var Beach = require('../models/beach');
const baseURL = "http://api.worldweatheronline.com/premium/v1/marine.ashx?key=62a39ebb20f94c32873132417172611&q=";
var request = require('sync-request');
var headers = {
    "Content-Type":     "application/x-www-form-urlencoded",
}
var parseString = require('xml2js').parseString;

//data => gets from api > moves to db.
/////
//..var Weather = require('/models/weather');

// Weather.findOne({
//         _id: req.query._id
//     },
//     function(err,obj) {
//         var returned = req.query.question;
//         res.send(obj[returned].toString());
//     });var get_data_from_api = data_.get_data;

var data123='';
// request.post({url:'http://api.worldweatheronline.com/premium/v1/marine.ashx', form: {key:'62a39ebb20f94c32873132417172611',q:"33.080512,35.105903;",format:'json'}}, function(err,httpResponse,body){ /* ... */
//
//     console.log(httpResponse.body)
// })

function lemma_data_orgenizer(array_json){
    var returndata=[]
    var array = []
    var counter = 0;
    for(var i=0;i<array_json.length;i++){
        if(counter<4){
            array.push(array_json[i])
            if(counter===3){
                returndata.push(array)
            }
            counter++;
        }
        else {
            counter=0;
            array=[];
        }
    }
    return returndata
}

function getfromquery(){
    var body= {

    };

    var res = request('POST', baseURL+"33.080512,35.105903;33.047999,35.100984;33.044233,35.100984;32.977801,35.080225;33.047713,35.100879;33.010046,35.089095;33.010446,35.088598;33.004392,35.08735;32.917219,35.079874;32.915245,35.080783;32.848647,35.061701;32.838697,35.055459;32.832408,34.988208;32.835673,34.980233;32.793026,34.955649;32.797787,34.956357;32.79553,34.955896;32.785731,34.95472;32.679825,34.927097;32.641859,34.924247;32.512344,34.896587;32.538908,34.901462;32.444374,34.880139;32.43893,34.877815;32.437794,34.87724;32.409725,34.868945;32.386485,34.863701;32.365862,34.857795;32.345084,34.852932;32.336108,34.850345;32.322134,34.84712;32.330138,34.847585;32.327084,34.847515;32.302145,34.841203;32.273129,34.833096;32.228206,34.819122;32.001133,34.73243;31.999169,34.731548;31.998462,34.731548;31.996524,34.730937;31.999598,34.731604;31.996194,34.730604;31.926162,34.696927;32.187626,34.804618;32.180083,34.802302;32.174381,34.800545;32.170382,34.799028;32.16778,34.798245;32.165969,34.797628;32.152144,34.793832;32.156497,34.795295;32.141675,34.790424;32.121649,34.780293;32.09418,34.77123;32.093039,34.770774;32.090294,34.769913;32.090955,34.770117;32.08412,34.767877;32.080022,34.766783;32.078447,34.766243;32.074927,34.765047;32.075525,34.765262;32.07027,34.763376;32.072636,34.763988;32.060426,34.758808;32.068433,34.761794;32.060991,34.759377;32.039308,34.745228;32.027507,34.740604;"
        +"&format=json", { headers:headers,json:body
    });
    var user = res.getBody('utf8');
    var object;
    parseString(user, function (err, result) {
        object = monipulation_data_first(result);
    });

    return object
}


function getfromquery1(){
    var body= {

    };

    var res = request('POST', baseURL+"32.021851,34.738525;32.022274,34.738625;32.021851,34.738525;32.006054,34.734282;32.017896,34.738359;32.009341,34.735546;32.017448,34.738196;31.810998,34.638305;31.808512,34.636835;31.800605,34.632618;31.790642,34.627002;31.788667,34.625763;31.772688,34.619184;31.805567,34.635662;31.675975,34.552066;31.684967,34.560287;31.676955,34.553552;31.672271,34.550543;31.665386,34.545296;31.612828,34.504699;31.744888,34.600468;32.843423,35.525826;32.767407,35.639289;32.724297,35.619231;32.706589,35.596594;32.705592,35.586551;32.805001,35.528479;32.793529,35.541748;32.793028,35.542015;32.789033,35.543046;32.783608,35.543754;32.780127,35.545337;32.777516,35.545012;32.775068,35.546238;32.768109,35.549894;32.791279,35.542617;32.85942,35.642953;32.8597897,35.6473487;32.848551,35.649691;32.8248654,35.6488866;32.7616369,35.5579798;32.861709,35.536652;32.89112,35.596733;32.73666,35.569718;32.80332,35.6436904;32.8435762,35.6511705;32.849993,35.648961;32.819288,35.519872;31.417091,35.378898;31.203599,35.363209;31.202837,35.364915;31.201327,35.366573;31.200461,35.366449;31.198956,35.365763;31.195586,35.362952;31.193916,35.363156;31.194646,35.363107;31.193247,35.363123;31.174256,35.368531;31.164676,35.367399;31.169803,35.367941;31.167054,35.367345;31.168568,35.367576;29.545856,34.970126;29.547412,34.966107;29.547194,34.962909;29.549184,34.95909;"
        +"&format=json", { headers:headers,json:body
    });
    var user2 = res.getBody('utf8');
    var object1;
    parseString(user2, function (err, result) {
        object1 = monipulation_data_first(result);
    });
    return object1
}


// var arr = getfromquery(); //

// var conditions = {'lat':33.080512,'lon':35.105903}
//     , update = { blue_flag:true }
//     , options = { multi: false};
//

//var brr = getfromquery1();
//console.log(arr.push.apply(arr,brr))
function insert_first(arra){
    // for(var i=0;i<arrayOfWeather.length;i++){
        var update_data = {
            weather_current:JSON.stringify(arra[0])
        }
    //     Beach.findOneAndUpdate({"lat":32.977801,"lon":35.080225},update_data)
    //         .exec(function (error, beach) {
    //             if (error) {
    //                 return (error);
    //             } else {
    //                 if (beach === null) {
    //                     var err = new Error('Not authorized! Go back!');
    //                     err.status = 400;
    //                     return (err);
    //                 } else {
    //
    //                     return res.send("yay")
    //                 }
    //             }
    //         });
    // // }


}
// getfromquery();
// insert_first(arr)


var coordinates1 = [{lat:33.080512,lon:35.105903}, {lat:33.047999,lon:35.100984}, {lat:33.044233,lon:35.100984}, {lat:32.977801,lon:35.080225}, {lat:33.047713,lon:35.100879}, {lat:33.010046,lon:35.089095}, {lat:33.010446,lon:35.088598}, {lat:33.004392,lon:35.08735}, {lat:32.917219,lon:35.079874}, {lat:32.915245,lon:35.080783}, {lat:32.848647,lon:35.061701}, {lat:32.838697,lon:35.055459}, {lat:32.832408,lon:34.988208}, {lat:32.835673,lon:34.980233}, {lat:32.793026,lon:34.955649}, {lat:32.797787,lon:34.956357}, {lat:32.79553,lon:34.955896}, {lat:32.785731,lon:34.95472}, {lat:32.679825,lon:34.927097}, {lat:32.641859,lon:34.924247}, {lat:32.512344,lon:34.896587}, {lat:32.538908,lon:34.901462}, {lat:32.444374,lon:34.880139}, {lat:32.43893,lon:34.877815}, {lat:32.437794,lon:34.87724}, {lat:32.409725,lon:34.868945}, {lat:32.386485,lon:34.863701}, {lat:32.365862,lon:34.857795}, {lat:32.345084,lon:34.852932}, {lat:32.336108,lon:34.850345}, {lat:32.322134,lon:34.84712},{lat:32.330138,lon:34.847585}, {lat:32.327084,lon:34.847515},{lat:32.302145,lon:34.841203}, {lat:32.273129,lon:34.833096}, {lat:32.228206,lon:34.819122},{lat:32.001133,lon:34.73243},{lat:31.999169,lon:34.731548},{lat:31.998462,lon:34.731548},{lat:31.996524,lon:34.730937},{lat:31.999598,lon:34.731604},{lat:31.996194,lon:34.730604},{lat:31.926162,lon:34.696927},{lat:32.187626,lon:34.804618},{lat:32.180083,lon:34.802302},{lat:32.174381,lon:34.800545},{lat:32.170382,lon:34.799028},{lat:32.16778,lon:34.798245},{lat:32.165969,lon:34.797628},{lat:32.152144,lon:34.793832},{lat:32.156497,lon:34.795295},{lat:32.141675,lon:34.790424},{lat:32.121649,lon:34.780293},{lat:32.09418,lon:34.77123},{lat:32.093039,lon:34.770774},{lat:32.090294,lon:34.769913},{lat:32.090955,lon:34.770117},{lat:32.08412,lon:34.767877},{lat:32.080022,lon:34.766783},{lat:32.078447,lon:34.766243},{lat:32.074927,lon:34.765047},{lat:32.075525,lon:34.765262},{lat:32.07027,lon:34.763376},{lat:32.072636,lon:34.763988},{lat:32.060426,lon:34.758808},{lat:32.068433,lon:34.761794},{lat:32.060991,lon:34.759377},{lat:32.039308,lon:34.745228},{lat:32.027507,lon:34.740604},{lat:32.021851,lon:34.738525},{lat:32.022274,lon:34.738625},{lat:32.021851,lon:34.738525},{lat:32.006054,lon:34.734282},{lat:32.017896,lon:34.738359},{lat:32.009341,lon:34.735546},{lat:32.017448,lon:34.738196},{lat:31.810998,lon:34.638305},{lat:31.808512,lon:34.636835},{lat:31.800605,lon:34.632618},{lat:31.790642,lon:34.627002},{lat:31.788667,lon:34.625763},{lat:31.772688,lon:34.619184},{lat:31.805567,lon:34.635662},{lat:31.675975,lon:34.552066},{lat:31.684967,lon:34.560287},{lat:31.676955,lon:34.553552},{lat:31.672271,lon:34.550543},{lat:31.665386,lon:34.545296},{lat:31.612828,lon:34.504699},{lat:31.744888,lon:34.600468},{lat:32.843423,lon:35.525826},{lat:32.767407,lon:35.639289},{lat:32.724297,lon:35.619231},{lat:32.706589,lon:35.596594},{lat:32.705592,lon:35.586551},{lat:32.805001,lon:35.528479},{lat:32.793529,lon:35.541748},{lat:32.793028,lon:35.542015},{lat:32.789033,lon:35.543046},{lat:32.783608,lon:35.543754},{lat:32.780127,lon:35.545337},{lat:32.777516,lon:35.545012},{lat:32.775068,lon:35.546238},{lat:32.768109,lon:35.549894},{lat:32.791279,lon:35.542617},{lat:32.85942,lon:35.642953},{lat:32.8597897,lon:35.6473487},{lat:32.848551,lon:35.649691},{lat:32.8248654,lon:35.6488866},{lat:32.7616369,lon:35.5579798},{lat:32.861709,lon:35.536652},{lat:32.89112,lon:35.596733},{lat:32.73666,lon:35.569718},{lat:32.80332,lon:35.6436904},{lat:32.8435762,lon:35.6511705},{lat:32.849993,lon:35.648961},{lat:32.819288,lon:35.519872},{lat:31.417091,lon:35.378898},{lat:31.203599,lon:35.363209},{lat:31.202837,lon:35.364915},{lat:31.201327,lon:35.366573},{lat:31.200461,lon:35.366449},{lat:31.198956,lon:35.365763},{lat:31.195586,lon:35.362952},{lat:31.193916,lon:35.363156},{lat:31.194646,lon:35.363107},{lat:31.193247,lon:35.363123},{lat:31.174256,lon:35.368531},{lat:31.164676,lon:35.367399},{lat:31.169803,lon:35.367941},{lat:31.167054,lon:35.367345},{lat:31.168568,lon:35.367576},{lat:29.545856,lon:34.970126},{lat:29.547412,lon:34.966107},{lat:29.547194,lon:34.962909},{lat:29.549184,lon:34.95909}]
var arr_coords =''
var arr2_coords =''
//"33.080512,35.105903;33.047999,35.100984;33.044233,35.100984;32.977801,35.080225;33.047713,35.100879;33.010046,35.089095;33.010446,35.088598;33.004392,35.08735;32.917219,35.079874;32.915245,35.080783;32.848647,35.061701;32.838697,35.055459;32.832408,34.988208;32.835673,34.980233;32.793026,34.955649;32.797787,34.956357;32.79553,34.955896;32.785731,34.95472;32.679825,34.927097;32.641859,34.924247;32.512344,34.896587;32.538908,34.901462;32.444374,34.880139;32.43893,34.877815;32.437794,34.87724;32.409725,34.868945;32.386485,34.863701;32.365862,34.857795;32.345084,34.852932;32.336108,34.850345;32.322134,34.84712;32.330138,34.847585;32.327084,34.847515;32.302145,34.841203;32.273129,34.833096;32.228206,34.819122;32.001133,34.73243;31.999169,34.731548;31.998462,34.731548;31.996524,34.730937;31.999598,34.731604;31.996194,34.730604;31.926162,34.696927;32.187626,34.804618;32.180083,34.802302;32.174381,34.800545;32.170382,34.799028;32.16778,34.798245;32.165969,34.797628;32.152144,34.793832;32.156497,34.795295;32.141675,34.790424;32.121649,34.780293;32.09418,34.77123;32.093039,34.770774;32.090294,34.769913;32.090955,34.770117;32.08412,34.767877;32.080022,34.766783;32.078447,34.766243;32.074927,34.765047;32.075525,34.765262;32.07027,34.763376;32.072636,34.763988;32.060426,34.758808;32.068433,34.761794;32.060991,34.759377;32.039308,34.745228;32.027507,34.740604;33.080512,35.105903;33.047999,35.100984;33.044233,35.100984;32.977801,35.080225;33.047713,35.100879;33.010046,35.089095;33.010446,35.088598;33.004392,35.08735;32.917219,35.079874;32.915245,35.080783;32.848647,35.061701;32.838697,35.055459;32.832408,34.988208;32.835673,34.980233;32.793026,34.955649;32.797787,34.956357;32.79553,34.955896;32.785731,34.95472;32.679825,34.927097;32.641859,34.924247;32.512344,34.896587;32.538908,34.901462;32.444374,34.880139;32.43893,34.877815;32.437794,34.87724;32.409725,34.868945;32.386485,34.863701;32.365862,34.857795;32.345084,34.852932;32.336108,34.850345;32.322134,34.84712;32.330138,34.847585;32.327084,34.847515;32.302145,34.841203;32.273129,34.833096;32.228206,34.819122;32.001133,34.73243;31.999169,34.731548;31.998462,34.731548;31.996524,34.730937;31.999598,34.731604;31.996194,34.730604;31.926162,34.696927;32.187626,34.804618;32.180083,34.802302;32.174381,34.800545;32.170382,34.799028;32.16778,34.798245;32.165969,34.797628;32.152144,34.793832;32.156497,34.795295;32.141675,34.790424;32.121649,34.780293;32.09418,34.77123;32.093039,34.770774;32.090294,34.769913;32.090955,34.770117;32.08412,34.767877;32.080022,34.766783;32.078447,34.766243;32.074927,34.765047;32.075525,34.765262;32.07027,34.763376;32.072636,34.763988;32.060426,34.758808;32.068433,34.761794;32.060991,34.759377;32.039308,34.745228;32.027507,34.740604;32.021851,34.738525;32.022274,34.738625;32.021851,34.738525;32.006054,34.734282;32.017896,34.738359;32.014632,34.737549;32.009341,34.735546;32.017448,34.738196;31.810998,34.638305;31.808512,34.636835;31.800605,34.632618;31.790642,34.627002;31.788667,34.625763;31.772688,34.619184;31.805567,34.635662;31.675975,34.552066;31.684967,34.560287;31.676955,34.553552;31.672271,34.550543;31.665386,34.545296;31.612828,34.504699;31.744888,34.600468;32.843423,35.525826;32.767407,35.639289;32.724297,35.619231;32.706589,35.596594;32.705592,35.586551;32.805001,35.528479;32.793529,35.541748;32.793028,35.542015;32.789033,35.543046;32.783608,35.543754;32.780127,35.545337;32.777516,35.545012;32.775068,35.546238;32.768109,35.549894;32.791279,35.542617;32.85942,35.642953;32.8597897,35.6473487;32.848551,35.649691;32.8248654,35.6488866;32.7616369,35.5579798;32.861709,35.536652;32.89112,35.596733;32.73666,35.569718;32.80332,35.6436904;32.8435762,35.6511705;32.849993,35.648961;32.819288,35.519872;31.417091,35.378898;31.203599,35.363209;31.202837,35.364915;31.201327,35.366573;31.200461,35.366449;31.198956,35.365763;31.195586,35.362952;31.193916,35.363156;31.194646,35.363107;31.193247,35.363123;31.174256,35.368531;31.164676,35.367399;31.169803,35.367941;31.167054,35.367345;31.168568,35.367576;29.545856,34.970126;29.547412,34.966107;29.547194,34.962909;29.549184,34.95909";
// make_str_to_query()


function make_str_to_query() {
    for (var i = 0; i < coordinates1.length; i++) {
        if(i<=coordinates1.length/2){
            arr_coords += coordinates1[i].lat + ',' + coordinates1[i].lon + ';';
        }
        else{
            arr2_coords+=coordinates1[i].lat + ',' + coordinates1[i].lon + ';';
        }

      //  str_coords += coordinates[i].lat + ',' + coordinates[i].lon + ';';
    }
    console.log(arr_coords);
    console.log('')
    console.log(arr2_coords)
}
 // make_str_to_query()

//add to db per location:
function insert_toDB_per_location_and_get_data(){
    for (var i = 0; i < coordinates.length; i++) {
        get_data_from_api = new Get_data_from_api('"'+coordinates[i].lat + ',' + coordinates[i].lon + ';"');
    //    monipulation_data_first = monipulation_data_first(get_data_from_api)
       // get_current_time = new get_current_time(monipulation_data_first)
    }
}





//get_data_from_api = new Get_data_from_api(str_coords);
//console.log(get_data_from_api);
//
// var get_data_from_api = new Get_data_from_api("33.080512,35.105903")
// //
//
// var monipulation_data_first1 = monipulation_data_first(get_data_from_api)
// // var get_current_time1 = new get_current_time(monipulation_data_first1)
// // console.log(get_current_time1);
// console.log(monipulation_data_first1);
//

/*
 /usr/local/bin/node /Users/ronen/Documents/Projects/Web/hofim/src/weather.js
 33.080512,35.105903;33.047999,35.100984;33.044233,35.100984;32.977801,35.080225;33.047713,35.100879;33.010046,35.089095;33.010446,35.088598;33.004392,35.08735;32.917219,35.079874;32.915245,35.080783;32.848647,35.061701;32.838697,35.055459;32.832408,34.988208;32.835673,34.980233;32.793026,34.955649;32.797787,34.956357;32.79553,34.955896;32.785731,34.95472;32.679825,34.927097;32.641859,34.924247;32.512344,34.896587;32.538908,34.901462;32.444374,34.880139;32.43893,34.877815;32.437794,34.87724;32.409725,34.868945;32.386485,34.863701;32.365862,34.857795;32.345084,34.852932;32.336108,34.850345;32.322134,34.84712;32.330138,34.847585;32.327084,34.847515;32.302145,34.841203;32.273129,34.833096;32.228206,34.819122;32.001133,34.73243;31.999169,34.731548;31.998462,34.731548;31.996524,34.730937;31.999598,34.731604;31.996194,34.730604;31.926162,34.696927;32.187626,34.804618;32.180083,34.802302;32.174381,34.800545;32.170382,34.799028;32.16778,34.798245;32.165969,34.797628;32.152144,34.793832;32.156497,34.795295;32.141675,34.790424;32.121649,34.780293;32.09418,34.77123;32.093039,34.770774;32.090294,34.769913;32.090955,34.770117;32.08412,34.767877;32.080022,34.766783;32.078447,34.766243;32.074927,34.765047;32.075525,34.765262;32.07027,34.763376;32.072636,34.763988;32.060426,34.758808;32.068433,34.761794;32.060991,34.759377;32.039308,34.745228;32.027507,34.740604;

 32.021851,34.738525;32.022274,34.738625;32.021851,34.738525;32.006054,34.734282;32.017896,34.738359;32.014632,34.737549;32.009341,34.735546;32.017448,34.738196;31.810998,34.638305;31.808512,34.636835;31.800605,34.632618;31.790642,34.627002;31.788667,34.625763;31.772688,34.619184;31.805567,34.635662;31.675975,34.552066;31.684967,34.560287;31.676955,34.553552;31.672271,34.550543;31.665386,34.545296;31.612828,34.504699;31.744888,34.600468;32.843423,35.525826;32.767407,35.639289;32.724297,35.619231;32.706589,35.596594;32.705592,35.586551;32.805001,35.528479;32.793529,35.541748;32.793028,35.542015;32.789033,35.543046;32.783608,35.543754;32.780127,35.545337;32.777516,35.545012;32.775068,35.546238;32.768109,35.549894;32.791279,35.542617;32.85942,35.642953;32.8597897,35.6473487;32.848551,35.649691;32.8248654,35.6488866;32.7616369,35.5579798;32.861709,35.536652;32.89112,35.596733;32.73666,35.569718;32.80332,35.6436904;32.8435762,35.6511705;32.849993,35.648961;32.819288,35.519872;31.417091,35.378898;31.203599,35.363209;31.202837,35.364915;31.201327,35.366573;31.200461,35.366449;31.198956,35.365763;31.195586,35.362952;31.193916,35.363156;31.194646,35.363107;31.193247,35.363123;31.174256,35.368531;31.164676,35.367399;31.169803,35.367941;31.167054,35.367345;31.168568,35.367576;29.545856,34.970126;29.547412,34.966107;29.547194,34.962909;29.549184,34.95909;

 Process finished with exit code 0

//  */
// mongoose.connect('mongodb://ronenpi18:wigitechDB@cluster0-shard-00-00-n9k3j.mongodb.net:27017,cluster0-shard-00-01-n9k3j.mongodb.net:27017,cluster0-shard-00-02-n9k3j.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
// var db = mongoose.connection;

function store_update_db(data_to_insert,condition) {


}

// console.log(getfromquery());
///////////////////////////////////////////////////////////////////////////////////////////
/**
 * functin to insert and get the current time
 * @param coordinates
 */
function get_current_and_update_db(coordinates){
    var array_first_n = getfromquery()
    var array_sec_n = getfromquery1()
    get_current_time = new Get_current_time(array_first_n)
    get_current_time1 = new Get_current_time(array_sec_n)
    get_current_time.push.apply(get_current_time,get_current_time1)


    MongoClient.connect('mongodb://ronenpi18:wigitechDB@cluster0-shard-00-00-n9k3j.mongodb.net:27017,cluster0-shard-00-01-n9k3j.mongodb.net:27017,cluster0-shard-00-02-n9k3j.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function (err, db) {
        if (err) throw err;
        for(var i=0;i<coordinates.length;i++) {
            db.collection('beaches').findAndModify(
                coordinates[i], // query
                [['_id', 'asc']],  // sort order
                {$set: {weather_current: get_current_time[i]}}, // replacement,     replaces only the field "hi"
                {}, // options
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  //     returns error if no matching object found
                    } else {
                        // console.dir(object);
                        console.log("good")
                    }
                });
        }
        db.close((function(closeResult){
            console.log("All finished. Can has prompt return nao?")
        }));
    });
    // console.log(get_current_time.length);

}
//////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * daily function to get today's weather and put it in the shitty db at weather_general
 * @param coordinates
 */
function insert_data_to_weather_query(coordinates) {
    var array_first_n = getfromquery()
    var array_sec_n = getfromquery1()
    array_first_n = lemma_data_orgenizer(array_first_n)
    array_sec_n = lemma_data_orgenizer(array_sec_n)
   // array_first_n.push.apply(array_first_n,array_sec_n)
    var returnd = lemma_data_orgenizer(array_first_n)
    MongoClient.connect('mongodb://ronenpi18:wigitechDB@cluster0-shard-00-00-n9k3j.mongodb.net:27017,cluster0-shard-00-01-n9k3j.mongodb.net:27017,cluster0-shard-00-02-n9k3j.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function (err, db) {
        if (err) throw err;
        for(var i=0;i<69;i++) {
            db.collection('beaches').findOneAndUpdate(
                array_first_n[i][0].place, // query
                [['_id', 'asc']],  // sort order
                {$set: {weather_general: array_first_n[i]}}, // replacement,     replaces only the field "hi"
                {}, // options
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  //     returns error if no matching object found
                    } else {
                        // console.dir(object);
                        console.log("good")
                    }
                });
        }
        for(var j=0;j<67;j++) {
            db.collection('beaches').findOneAndUpdate(
                array_sec_n[j][0].place, // query
                [['_id', 'asc']],  // sort order
                {$set: {weather_general: array_sec_n[j]}}, // replacement,     replaces only the field "hi"
                {}, // options
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  //     returns error if no matching object found
                    } else {
                        // console.dir(object);
                        console.log("good")
                    }
                });
        }
        // for(var i=0;i<coordinates.length-1;i++) {
        //
        //     db.collection('beaches').findAndModify(
        //         returnd[i][0].place, // query
        //         [['_id', 'asc']],  // sort order
        //         {$set: {weather_general: returnd[i]}}, // replacement,     replaces only the field "hi"
        //         {}, // options
        //         function (err, object) {
        //             if (err) {
        //                 console.warn(err.message);  //     returns error if no matching object found
        //             } else {
        //                 // console.dir(object);
        //                 // console.log("good")
        //             }
        //         });
        // }
        db.close((function(closeResult){
            console.log("ok.. lets see what up")
        }));
    });

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function get_tomorrows_and_update_db(coordinates,array_first_n,array_sec_n){

    get_current_time = new Get_current_time(array_first_n)
    get_current_time1 = new Get_current_time(array_sec_n)
   // get_current_time.push.apply(get_current_time,get_current_time1)


    MongoClient.connect('mongodb://ronenpi18:wigitechDB@cluster0-shard-00-00-n9k3j.mongodb.net:27017,cluster0-shard-00-01-n9k3j.mongodb.net:27017,cluster0-shard-00-02-n9k3j.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function (err, db) {
        if (err) throw err;
        for(var i=0;i<(coordinates.length)/2;i++) {
            db.collection('beaches').findAndModify(
                coordinates[i], // query
                [['_id', 'asc']],  // sort order
                {$set: {weather_current: get_current_time[i]}}, // replacement,     replaces only the field "hi"
                {}, // options
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  //     returns error if no matching object found
                    } else {
                        // console.dir(object);
                        console.log("good")
                    }
                });
        }
        for(var j=(coordinates.length)/2;j<coordinates.length;j++) {
            db.collection('beaches').findAndModify(
                coordinates[j], // query
                [['_id', 'asc']],  // sort order
                {$set: {weather_current: get_current_time[j]}}, // replacement,     replaces only the field "hi"
                {}, // options
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  //     returns error if no matching object found
                    } else {
                        // console.dir(object);
                        console.log("good")
                    }
                });
        }
        db.close((function(closeResult){
            console.log("All finished. Can has prompt return nao?")
        }));
    });
    // console.log(get_current_time.length);

}
var abc = []
function get_object_weather_general(coordinates){
//db.inventory.find( { type: 'food' }, { item: 1, qty: 1, _id:0 } )
    MongoClient.connect('mongodb://ronenpi18:wigitechDB@cluster0-shard-00-00-n9k3j.mongodb.net:27017,cluster0-shard-00-01-n9k3j.mongodb.net:27017,cluster0-shard-00-02-n9k3j.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function (err, db) {
        if (err) throw err;
        for(var i=0;i<coordinates.length;i++) {
            db.collection('beaches').distinct("weather_general",// options
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  //     returns error if no matching object found
                    } else {
                        // console.dir(object);
                       abc.push(object);
                    }
                });
        }
        db.close((function(closeResult){
            console.log("All finished. Can has prompt return nao?")
        }));
    });
}
// insert_data_to_weather_query(coordinates1)
// get_object_weather_general(coordinates1)

var a = [
    {
        "lat": 33.080512,
        "lon": 35.105903,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 33.047999,
        "lon": 35.100984,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 33.044233,
        "lon": 35.100984,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.977801,
        "lon": 35.080225,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 33.047713,
        "lon": 35.100879,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 33.010046,
        "lon": 35.089095,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 33.010446,
        "lon": 35.088598,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 33.004392,
        "lon": 35.08735,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.917219,
        "lon": 35.079874,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.915245,
        "lon": 35.080783,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.848647,
        "lon": 35.061701,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.838697,
        "lon": 35.055459,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.832408,
        "lon": 34.988208,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.835673,
        "lon": 34.980233,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.793026,
        "lon": 34.955649,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.797787,
        "lon": 34.956357,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.79553,
        "lon": 34.955896,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.785731,
        "lon": 34.95472,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.679825,
        "lon": 34.927097,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.641859,
        "lon": 34.924247,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.512344,
        "lon": 34.896587,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.538908,
        "lon": 34.901462,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.444374,
        "lon": 34.880139,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.43893,
        "lon": 34.877815,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.437794,
        "lon": 34.87724,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.409725,
        "lon": 34.868945,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.386485,
        "lon": 34.863701,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.365862,
        "lon": 34.857795,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.345084,
        "lon": 34.852932,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.336108,
        "lon": 34.850345,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.322134,
        "lon": 34.84712,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.330138,
        "lon": 34.847585,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.327084,
        "lon": 34.847515,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.302145,
        "lon": 34.841203,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.273129,
        "lon": 34.833096,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.228206,
        "lon": 34.819122,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.001133,
        "lon": 34.73243,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.999169,
        "lon": 34.731548,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.998462,
        "lon": 34.731548,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.996524,
        "lon": 34.730937,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.999598,
        "lon": 34.731604,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.996194,
        "lon": 34.730604,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.926162,
        "lon": 34.696927,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.187626,
        "lon": 34.804618,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.180083,
        "lon": 34.802302,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.174381,
        "lon": 34.800545,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.170382,
        "lon": 34.799028,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.16778,
        "lon": 34.798245,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.165969,
        "lon": 34.797628,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.152144,
        "lon": 34.793832,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.156497,
        "lon": 34.795295,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.141675,
        "lon": 34.790424,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.121649,
        "lon": 34.780293,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.09418,
        "lon": 34.77123,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.093039,
        "lon": 34.770774,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.090294,
        "lon": 34.769913,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.090955,
        "lon": 34.770117,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.08412,
        "lon": 34.767877,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.080022,
        "lon": 34.766783,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.078447,
        "lon": 34.766243,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.074927,
        "lon": 34.765047,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.075525,
        "lon": 34.765262,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.07027,
        "lon": 34.763376,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.072636,
        "lon": 34.763988,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.060426,
        "lon": 34.758808,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.068433,
        "lon": 34.761794,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.060991,
        "lon": 34.759377,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.039308,
        "lon": 34.745228,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.027507,
        "lon": 34.740604,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.021851,
        "lon": 34.738525,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.022274,
        "lon": 34.738625,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.021851,
        "lon": 34.738525,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.006054,
        "lon": 34.734282,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.017896,
        "lon": 34.738359,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.014632,
        "lon": 34.737549,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.009341,
        "lon": 34.735546,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.017448,
        "lon": 34.738196,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.810998,
        "lon": 34.638305,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.808512,
        "lon": 34.636835,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.800605,
        "lon": 34.632618,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.790642,
        "lon": 34.627002,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.788667,
        "lon": 34.625763,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.772688,
        "lon": 34.619184,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.805567,
        "lon": 34.635662,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.675975,
        "lon": 34.552066,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.684967,
        "lon": 34.560287,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.676955,
        "lon": 34.553552,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.672271,
        "lon": 34.550543,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.665386,
        "lon": 34.545296,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.612828,
        "lon": 34.504699,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.744888,
        "lon": 34.600468,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.843423,
        "lon": 35.525826,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.767407,
        "lon": 35.639289,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.724297,
        "lon": 35.619231,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.706589,
        "lon": 35.596594,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.705592,
        "lon": 35.586551,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.805001,
        "lon": 35.528479,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.793529,
        "lon": 35.541748,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.793028,
        "lon": 35.542015,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.789033,
        "lon": 35.543046,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.783608,
        "lon": 35.543754,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.780127,
        "lon": 35.545337,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.777516,
        "lon": 35.545012,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.775068,
        "lon": 35.546238,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.768109,
        "lon": 35.549894,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.791279,
        "lon": 35.542617,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.85942,
        "lon": 35.642953,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.8597897,
        "lon": 35.6473487,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.848551,
        "lon": 35.649691,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.8248654,
        "lon": 35.6488866,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.7616369,
        "lon": 35.5579798,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.861709,
        "lon": 35.536652,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.89112,
        "lon": 35.596733,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.73666,
        "lon": 35.569718,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.80332,
        "lon": 35.6436904,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.8435762,
        "lon": 35.6511705,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.849993,
        "lon": 35.648961,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 32.819288,
        "lon": 35.519872,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.417091,
        "lon": 35.378898,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.203599,
        "lon": 35.363209,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.202837,
        "lon": 35.364915,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.201327,
        "lon": 35.366573,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.200461,
        "lon": 35.366449,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.198956,
        "lon": 35.365763,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.195586,
        "lon": 35.362952,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.193916,
        "lon": 35.363156,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.194646,
        "lon": 35.363107,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.193247,
        "lon": 35.363123,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.174256,
        "lon": 35.368531,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.164676,
        "lon": 35.367399,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.169803,
        "lon": 35.367941,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.167054,
        "lon": 35.367345,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 31.168568,
        "lon": 35.367576,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 29.545856,
        "lon": 34.970126,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 29.547412,
        "lon": 34.966107,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 29.547194,
        "lon": 34.962909,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    },
    {
        "lat": 29.549184,
        "lon": 34.95909,
        "name": "",
        "disabilities_status": false,
        "blue_flag":false
    }
]

var ab = ["מועצה אזורית מטה אשר",
    "מועצה אזורית מטה אשר",
    "מועצה אזורית מטה אשר","מועצה אזורית מטה אשר"
    ,"מועצה אזורית מטה אשר",
    "עיריית נהריה","עיריית נהריה","עיריית נהריה","עיריית עכו","עיריית עכו","עיריית קריית ים","חיפה","חיפה","חיפה","חיפה","חיפה","חיפה","חיפה","מועצה אזורית חוף כרמל","מועצה אזורית חוף כרמל","מועצה אזורית חוף כרמל","מועצה מקומית ג'סר זרקא","עיריית חדרה","עיריית חדרה","עיריית חדרה","מועצה אזורית עמק חפר","מועצה אזורית עמק חפר","מועצה אזורית עמק חפר","עיריית נתניה","עיריית נתניה","עיריית נתניה","עיריית נתניה","עיריית נתניה","עיריית נתניה","עיריית נתניה","מועצה אזורית חוף השרון"," עריית ראשון לציון"," עריית ראשון לציון"," עריית ראשון לציון"," עריית ראשון לציון"," עריית ראשון לציון"," עריית ראשון לציון","מועצה אזורית גן רווה","עיריית הרצליה","עיריית הרצליה","עיריית הרצליה","עיריית הרצליה","עיריית הרצליה","עיריית הרצליה","עיריית הרצליה","עיריית הרצליה","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית תל-אביב יפו","עיריית בת-ים","עיריית בת-ים","עיריית בת-ים","עיריית בת-ים","עיריית בת-ים","עיריית בת-ים","עיריית בת-ים","עיריית בת-ים","עיריית בת-ים","עיריית אשדוד","עיריית אשדוד","עיריית אשדוד","עיריית אשדוד","עיריית אשדוד","עיריית אשדוד","עיריית אשדוד","עיריית אשקלון","עיריית אשקלון","עיריית אשקלון","עיריית אשקלון","עיריית אשקלון","המועצה האזורית חוף אשקלון","המועצה האזורית חוף אשקלון","המועצה האזורית עמק הירדן","המועצה האזורית עמק הירדן","המועצה האזורית עמק הירדן","המועצה האזורית עמק הירדן","המועצה האזורית עמק הירדן","עיריית טבריה","עיריית טבריה","עיריית טבריה","עיריית טבריה","עיריית טבריה","עיריית טבריה","עיריית טבריה","עיריית טבריה","עיריית טבריה","עיריית טבריה","איגוד ערים כנרת","איגוד ערים כנרת","איגוד ערים כנרת","איגוד ערים כנרת","איגוד ערים כנרת","איגוד ערים כנרת","איגוד ערים כנרת","איגוד ערים כנרת","איגוד ערים כנרת","איגוד ערים כנרת","איגוד ערים כנרת","מועצה מקומית מגדל","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","מועצה אזורית תמר","אילת","אילת","אילת","אילת"]
var blue_f_b=[false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false];

var disa_b=[false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false]

var names_b =[
    "חוף בצת","חוף פארק אכזיב","חוף אכזיב","חוף שבי ציון","חוף קלאב מד אכזיב","חוף נפרד","חוף גלי גלים","חוף סוקולוב","חוף הארגמן","חוף התמרים","חוף זבולון"," חוף קריית חיים"," החוף השקט","חוף בת גלים","חוף הכרמל","חוף דדו-זמיר","חוף דדו דרום","חוף הסטודנטים","חוף נווה ים","חוף דור","חוף האקוודוקט","חוף ג'סר","כפר הים"," חוף גבעת אולגה"," חוף גבעת אולגה –חוף נפרד","מכמורת","חוף בית ינאי"," חוף נעורים","חוף קרית צאנז","חוף העונות","חוף אמפי"," חוף הרצל"," חוף סירונית","חוף ארגמן - לגון","חוף פולג","חוף שפיים - געש","החוף הכחול","חוף נווה חוף","חוף חופית","חוף תל יונה","חוף הילדים","החוף נפרד","חוף פלמחים","נוף ים -סידני אלי","השרון","זבולון","חוף אכדיה צפון","חוף אכדיה מרכז","חוף אכדיה דרום - הנכים","חוף נפרד","חוף הכוכבים - הדרומי","חוף הצוק","חוף תל ברוך","חוף נורדאו - מציצים","חוף נורדאו - נפרד","הילטון צפון","חוף הכלבים","חוף גורדון","חוף פרישמן","חוף בוגרשוב","חוף אלנבי - ירושלים","חוף טרומפלדור","חוף אביב","חוף גאולה","חוף צ'רלס קלור","חוף התופים","חוף עלמה","חוף יפו - גבעת עליה","חוף ירושלים","חוף הסלע - תחנה 3","חוף הסלע - תחנה 2","חוף הסלע - תחנה 1","חוף טאיו","חוף לדוגמה","חוף הריביירה","חוף נפרד","חוף טובאגו","חוף מי עמי","חוף לידו","חוף הקשתות","חוף נפרד","חוף רובע י\"א","חוף ריביירה","חוף אורנים","חוף בר כוכבא דרום","חוף בר כוכבא צפון","חוף דלילה","חוף נפרד","חוף הפארק הלאומי","חוף זיקים","חוף ניצנים","חוף גנוסר","חוף עין גב","חוף האון","חוף מעגן","חוף צמח","חוף רקת - אוחנה","חוף התכלת","חוף השקט","חוף הטיילת","חוף גלי כנרת רימונים","חוף גיא","סירונית","חוף גנים","חוף חמי טבריה","החוף הנפרד","חוף כינר","חוף דוגה","חוף גולן","חוף לבנון-חלוקים-כורסי","חוף שקמים ברינקי","חוף חוקוק","חוף מפרץ אמנון","חוף צינברי","חוף גופרה","חוף צאלון","חוף דוגית","חוף רסטל","חמי מזור","חוף מרדיאן","חוף מלון הוד","צל הרים","חוף קראון פלזה","חוף לוט","חוף עין בוקק","חוף מלון דניאל","חוף סולריום","חוף קיסר - ישרוטל","חוף בינלאומי","חוף לאונרדו קלאב","חוף חמי זוהר","חוף לאונרדו פלאזה","החוף הנפרד","החוף הנפרד","חוף הרודס","חוף השחפים","חוף חנניה"
]
for(var i=0;i<ab.length;i++){
  //  a[i].name = names[i];
    a[i].city = ab[i];
}
console.log(names_b.length)