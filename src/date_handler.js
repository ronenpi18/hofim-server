var time = require('time');

// Create a new Date instance, representing the current instant in time
var now = new time.Date();

now.setTimezone("Asia/Jerusalem");

var WWO = require('worldweatheronline-api');

//var data ={}
// var client = WWO.createClient({
//     key: '62a39ebb20f94c32873132417172611',
//     responseType: 'json',
//     subscription: 'premium',
//     locale: 'EN'
// });

function monipulation_data_first(json) {
    var data_first = (JSON.parse(JSON.stringify(json['data'])));
    var data_sec_area_request = []
    var data_sec_area_weather = []
    var temp;

    for (var i = 0; i < (data_first["area"]).length; i++) {
        temp = data_first["area"][i]
        data_sec_area_request.push(temp.request)//JSON.parse(JSON.stringify(data_first['area']))['request'])
        data_sec_area_weather.push(temp.weather)
    }

//place and day
    var _3days_data_thi_area_weather_array = [];
    var places = [{"lat":33.080512,"lon":35.105903}, {"lat":33.047999,"lon":35.100984}, {"lat":33.044233,"lon":35.100984}, {"lat":32.977801,"lon":35.080225}, {"lat":33.047713,"lon":35.100879}, {"lat":33.010046,"lon":35.089095}, {"lat":33.010446,"lon":35.088598}, {"lat":33.004392,"lon":35.08735}, {"lat":32.917219,"lon":35.079874}, {"lat":32.915245,"lon":35.080783}, {"lat":32.848647,"lon":35.061701}, {"lat":32.838697,"lon":35.055459}, {"lat":32.832408,"lon":34.988208}, {"lat":32.835673,"lon":34.980233}, {"lat":32.793026,"lon":34.955649}, {"lat":32.797787,"lon":34.956357}, {"lat":32.79553,"lon":34.955896}, {"lat":32.785731,"lon":34.95472}, {"lat":32.679825,"lon":34.927097}, {"lat":32.641859,"lon":34.924247}, {"lat":32.512344,"lon":34.896587}, {"lat":32.538908,"lon":34.901462}, {"lat":32.444374,"lon":34.880139}, {"lat":32.43893,"lon":34.877815}, {"lat":32.437794,"lon":34.87724}, {"lat":32.409725,"lon":34.868945}, {"lat":32.386485,"lon":34.863701}, {"lat":32.365862,"lon":34.857795}, {"lat":32.345084,"lon":34.852932}, {"lat":32.336108,"lon":34.850345}, {"lat":32.322134,"lon":34.84712},{"lat":32.330138,"lon":34.847585}, {"lat":32.327084,"lon":34.847515},{"lat":32.302145,"lon":34.841203}, {"lat":32.273129,"lon":34.833096}, {"lat":32.228206,"lon":34.819122},{"lat":32.001133,"lon":34.73243},{"lat":31.999169,"lon":34.731548},{"lat":31.998462,"lon":34.731548},{"lat":31.996524,"lon":34.730937},{"lat":31.999598,"lon":34.731604},{"lat":31.996194,"lon":34.730604},{"lat":31.926162,"lon":34.696927},{"lat":32.187626,"lon":34.804618},{"lat":32.180083,"lon":34.802302},{"lat":32.174381,"lon":34.800545},{"lat":32.170382,"lon":34.799028},{"lat":32.16778,"lon":34.798245},{"lat":32.165969,"lon":34.797628},{"lat":32.152144,"lon":34.793832},{"lat":32.156497,"lon":34.795295},{"lat":32.141675,"lon":34.790424},{"lat":32.121649,"lon":34.780293},{"lat":32.09418,"lon":34.77123},{"lat":32.093039,"lon":34.770774},{"lat":32.090294,"lon":34.769913},{"lat":32.090955,"lon":34.770117},{"lat":32.08412,"lon":34.767877},{"lat":32.080022,"lon":34.766783},{"lat":32.078447,"lon":34.766243},{"lat":32.074927,"lon":34.765047},{"lat":32.075525,"lon":34.765262},{"lat":32.07027,"lon":34.763376},{"lat":32.072636,"lon":34.763988},{"lat":32.060426,"lon":34.758808},{"lat":32.068433,"lon":34.761794},{"lat":32.060991,"lon":34.759377},{"lat":32.039308,"lon":34.745228},{"lat":32.027507,"lon":34.740604},{"lat":32.021851,"lon":34.738525},{"lat":32.022274,"lon":34.738625},{"lat":32.021851,"lon":34.738525},{"lat":32.006054,"lon":34.734282},{"lat":32.017896,"lon":34.738359},{"lat":32.014632,"lon":34.737549},{"lat":32.009341,"lon":34.735546},{"lat":32.017448,"lon":34.738196},{"lat":31.810998,"lon":34.638305},{"lat":31.808512,"lon":34.636835},{"lat":31.800605,"lon":34.632618},{"lat":31.790642,"lon":34.627002},{"lat":31.788667,"lon":34.625763},{"lat":31.772688,"lon":34.619184},{"lat":31.805567,"lon":34.635662},{"lat":31.675975,"lon":34.552066},{"lat":31.684967,"lon":34.560287},{"lat":31.676955,"lon":34.553552},{"lat":31.672271,"lon":34.550543},{"lat":31.665386,"lon":34.545296},{"lat":31.612828,"lon":34.504699},{"lat":31.744888,"lon":34.600468},{"lat":32.843423,"lon":35.525826},{"lat":32.767407,"lon":35.639289},{"lat":32.724297,"lon":35.619231},{"lat":32.706589,"lon":35.596594},{"lat":32.705592,"lon":35.586551},{"lat":32.805001,"lon":35.528479},{"lat":32.793529,"lon":35.541748},{"lat":32.793028,"lon":35.542015},{"lat":32.789033,"lon":35.543046},{"lat":32.783608,"lon":35.543754},{"lat":32.780127,"lon":35.545337},{"lat":32.777516,"lon":35.545012},{"lat":32.775068,"lon":35.546238},{"lat":32.768109,"lon":35.549894},{"lat":32.791279,"lon":35.542617},{"lat":32.85942,"lon":35.642953},{"lat":32.8597897,"lon":35.6473487},{"lat":32.848551,"lon":35.649691},{"lat":32.8248654,"lon":35.6488866},{"lat":32.7616369,"lon":35.5579798},{"lat":32.861709,"lon":35.536652},{"lat":32.89112,"lon":35.596733},{"lat":32.73666,"lon":35.569718},{"lat":32.80332,"lon":35.6436904},{"lat":32.8435762,"lon":35.6511705},{"lat":32.849993,"lon":35.648961},{"lat":32.819288,"lon":35.519872},{"lat":31.417091,"lon":35.378898},{"lat":31.203599,"lon":35.363209},{"lat":31.202837,"lon":35.364915},{"lat":31.201327,"lon":35.366573},{"lat":31.200461,"lon":35.366449},{"lat":31.198956,"lon":35.365763},{"lat":31.195586,"lon":35.362952},{"lat":31.193916,"lon":35.363156},{"lat":31.194646,"lon":35.363107},{"lat":31.193247,"lon":35.363123},{"lat":31.174256,"lon":35.368531},{"lat":31.164676,"lon":35.367399},{"lat":31.169803,"lon":35.367941},{"lat":31.167054,"lon":35.367345},{"lat":31.168568,"lon":35.367576},{"lat":29.545856,"lon":34.970126},{"lat":29.547412,"lon":34.966107},{"lat":29.547194,"lon":34.962909},{"lat":29.549184,"lon":34.95909}]
    var places_vs_data = {data: {}, place: {}};
    var places_vs_data_array = [];
    for (var j = 0; j < data_sec_area_weather.length; j++) {
        for (var k = 0; k < data_sec_area_weather[j].length; k++) {
            if (k <= 4) {
                delete data_sec_area_weather[j][k]['astronomy']
                delete data_sec_area_weather[j][k]['mintempF']
                delete data_sec_area_weather[j][k]['maxtempF']

                data_sec_area_weather[j][k].place = places[j];
                _3days_data_thi_area_weather_array.push(data_sec_area_weather[j][k])

            }
            // _3days_data_thi_area_weather_array.push(data_sec_area_request)
        }
    }
    return _3days_data_thi_area_weather_array;
}

function get_hour() {
    var now_hour = time.localtime(Date.now() / 1000).hours;
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

function hourController(jsonArray) {
    // var list_hour_per_location =[[],[]]; //{location:{},data:data]}
    var hourly_={
        tempC:0,
        mintempC:0,
        maxtempC:0,
        hour:0,
        location:{},
        wave_high:0,
        wind_deg:0,
        wind_direction:"",
        wind_speed:0,
        waterTemp_C:0
    };
    var hours = [];
    var hourly_per_loc={
        location:{},
        hours:[]
    }
    var returned_per_loc=[]

    for(var i=0;i<jsonArray.length;i++){
        hourly_per_loc.location=jsonArray[i].place;
        for (var j=0;j<jsonArray[j].hourly.length;j++){
            hourly_.location = jsonArray[i].place;
            hourly_.maxtempC = jsonArray[i].hourly[j].maxtempC;
            hourly_.mintempC = jsonArray[i].hourly[j].mintempC;
            hourly_.hour = jsonArray[i].hourly[j].time;
            hourly_.wind_speed = jsonArray[i].hourly[j].windspeedKmph;
            hourly_.tempC = jsonArray[i].hourly[j].tempC;
            hourly_.wind_direction = jsonArray[i].hourly[j].winddir16Point;
            hourly_.waterTemp_C = jsonArray[i].hourly[j].waterTemp_C;
            hourly_.wave_high = jsonArray[i].hourly[j].swellHeight_m;
        }
        hours.push(hourly_);
        hourly_per_loc.hours.push(hours);
        returned_per_loc.push(hourly_per_loc);
    }
    return returned_per_loc;
}

//console.log(monipulation_data_first(data));
function get_current_time(json) {
   // json = monipulation_data_first(data);
    var array_place_vs_obj = [];
    var now_year = time.localtime(Date.now() / 1000).year + 1900;
    var now_month = time.localtime(Date.now() / 1000).month + 1;
    var now_day = time.localtime(Date.now() / 1000).dayOfMonth;
    if (now_day < 10) {
        now_day = '0' + now_day.toString()
    }
    var date = now_year.toString() + '-' + now_month.toString() + '-' + now_day.toString();
    //dayOfMonth
    // console.log(date.toString());
    for (var i = 0; i < json.length; i++) {
        if (json[i].date.toString() === date.toString()) {
            delete json[i].hourly[get_hour()].tempF
            delete json[i].hourly[get_hour()].windspeedMiles
            delete json[i].hourly[get_hour()].weatherCode
            delete json[i].hourly[get_hour()].weatherIconUrl
            delete json[i].hourly[get_hour()].weatherDesc
            delete json[i].hourly[get_hour()].precipMM
            delete json[i].hourly[get_hour()].humidity
            delete json[i].hourly[get_hour()].visibility
            delete json[i].hourly[get_hour()].pressure
            delete json[i].hourly[get_hour()].cloudcover
            delete json[i].hourly[get_hour()].HeatIndexC
            delete json[i].hourly[get_hour()].HeatIndexF
            delete json[i].hourly[get_hour()].DewPointC
            delete json[i].hourly[get_hour()].DewPointF
            delete json[i].hourly[get_hour()].WindGustMiles
            delete json[i].hourly[get_hour()].FeelsLikeF
            delete json[i].hourly[get_hour()].swellHeight_ft
            delete json[i].hourly[get_hour()].waterTemp_F
            delete json[i].hourly[get_hour()].WindChillF
            json[i].hourly[get_hour()].mintempC = json[i].mintempC;
            json[i].hourly[get_hour()].maxtempC = json[i].maxtempC;
            array_place_vs_obj.push(json[i].hourly[get_hour()])
        }
        // console.log(json[i].date);

    }
    return array_place_vs_obj;
}

function get_the_following_after_tomorrow_time () {
    json = monipulation_data_first(data);
    var array_place_vs_obj = [];
    var now_year = time.localtime(Date.now() / 1000).year + 1900;
    var now_month = time.localtime(Date.now() / 1000).month + 1;
    var now_day = time.localtime(Date.now() / 1000).dayOfMonth + 2;
    if (now_day < 10) {
        now_day = '0' + now_day.toString()
    }
    var date = now_year.toString() + '-' + now_month.toString() + '-' + now_day.toString();
    //dayOfMonth
    // console.log(date.toString());
    for (var i = 0; i < json.length; i++) {
        if (json[i].date.toString() === date.toString()) {
            delete json[i].hourly[get_hour()].tempF
            delete json[i].hourly[get_hour()].windspeedMiles
            delete json[i].hourly[get_hour()].weatherCode
            delete json[i].hourly[get_hour()].weatherIconUrl
            delete json[i].hourly[get_hour()].weatherDesc
            delete json[i].hourly[get_hour()].precipMM
            delete json[i].hourly[get_hour()].humidity
            delete json[i].hourly[get_hour()].visibility
            delete json[i].hourly[get_hour()].pressure
            delete json[i].hourly[get_hour()].cloudcover
            delete json[i].hourly[get_hour()].HeatIndexC
            delete json[i].hourly[get_hour()].HeatIndexF
            delete json[i].hourly[get_hour()].DewPointC
            delete json[i].hourly[get_hour()].DewPointF
            delete json[i].hourly[get_hour()].WindGustMiles
            delete json[i].hourly[get_hour()].FeelsLikeF
            delete json[i].hourly[get_hour()].swellHeight_ft
            delete json[i].hourly[get_hour()].waterTemp_F
            delete json[i].hourly[get_hour()].WindChillF
            json[i].hourly[get_hour()].mintempC = json[i].mintempC;
            json[i].hourly[get_hour()].maxtempC = json[i].maxtempC;

            array_place_vs_obj.push(json[i].hourly[get_hour()])
        }
        // console.log(json[i].date);

    }
    return array_place_vs_obj;
}

function get_tomorrow_time (json) {
 //   json = monipulation_data_first(data)
    var array_place_vs_obj = [];
    var now_year = time.localtime(Date.now() / 1000).year + 1900;
    var now_month = time.localtime(Date.now() / 1000).month + 1;
    var now_day = time.localtime(Date.now() / 1000).dayOfMonth + 1;
    if (now_day < 10) {
        now_day = '0' + now_day.toString()
    }
    var date = now_year.toString() + '-' + now_month.toString() + '-' + now_day.toString();
    //dayOfMonth
    // console.log(date.toString());
    for (var i = 0; i < json.length; i++) {
        if (json[i].date.toString() === date.toString()) {
            delete json[i].hourly[get_hour()].tempF
            delete json[i].hourly[get_hour()].windspeedMiles
            delete json[i].hourly[get_hour()].weatherCode
            delete json[i].hourly[get_hour()].weatherIconUrl
            delete json[i].hourly[get_hour()].weatherDesc
            delete json[i].hourly[get_hour()].precipMM
            delete json[i].hourly[get_hour()].humidity
            delete json[i].hourly[get_hour()].visibility
            delete json[i].hourly[get_hour()].pressure
            delete json[i].hourly[get_hour()].cloudcover
            delete json[i].hourly[get_hour()].HeatIndexC
            delete json[i].hourly[get_hour()].HeatIndexF
            delete json[i].hourly[get_hour()].DewPointC
            delete json[i].hourly[get_hour()].DewPointF
            delete json[i].hourly[get_hour()].WindGustMiles
            delete json[i].hourly[get_hour()].FeelsLikeF
            delete json[i].hourly[get_hour()].swellHeight_ft
            delete json[i].hourly[get_hour()].WindChillF
            delete json[i].hourly[get_hour()].waterTemp_F
            json[i].hourly[get_hour()].mintempC = json[i].mintempC;
            json[i].hourly[get_hour()].maxtempC = json[i].maxtempC;

            array_place_vs_obj.push(json[i].hourly[get_hour()])
        }
        // console.log(json[i].date);

    }
    return array_place_vs_obj;
}

// function get_data(query) {
//     way =
//         client.marineWeatherApi({
//             q: query// "33.080512,35.105903;33.047999,35.100984;32.977801,35.080225"
//         }, function (err, result) {
//             if (!err) {
//                 return result //console.log(result);
//                 // data = console.log(result);
//             } else {
//                 console.log(err);
//             }
//         });
// }
function get_data_session() {
        return data;

}

 //var abc = console.log(get_data("33.080512,35.105903;33.047999,35.100984;33.044233,35.100984;32.977801,35.080225;33.047713,35.100879;33.010046,35.089095;33.010446,35.088598;33.004392,35.08735;32.917219,35.079874;32.915245,35.080783;32.848647,35.061701;32.838697,35.055459;32.832408,34.988208;32.835673,34.980233;32.793026,34.955649;32.797787,34.956357;32.79553,34.955896;32.785731,34.95472;32.679825,34.927097;32.641859,34.924247;32.512344,34.896587;32.538908,34.901462;32.444374,34.880139;32.43893,34.877815;32.437794,34.87724;32.409725,34.868945;32.386485,34.863701;32.365862,34.857795;32.345084,34.852932;32.336108,34.850345;32.322134,34.84712;32.330138,34.847585;32.327084,34.847515;32.302145,34.841203;32.273129,34.833096;32.228206,34.819122;32.001133,34.73243;31.999169,34.731548;31.998462,34.731548;31.996524,34.730937;31.999598,34.731604;31.996194,34.730604;31.926162,34.696927;32.187626,34.804618;32.180083,34.802302;32.174381,34.800545;32.170382,34.799028;32.16778,34.798245;32.165969,34.797628;32.152144,34.793832;32.156497,34.795295;32.141675,34.790424;32.121649,34.780293;32.09418,34.77123;32.093039,34.770774;32.090294,34.769913;32.090955,34.770117;32.08412,34.767877;32.080022,34.766783;32.078447,34.766243;32.074927,34.765047;32.075525,34.765262;32.07027,34.763376;32.072636,34.763988;32.060426,34.758808;32.068433,34.761794;32.060991,34.759377;32.039308,34.745228;32.027507,34.740604;"));
//console.log(get_current_time(monipulation_data_first(data)));
//setTimeout(function(){console.log(abc)},35000)

module.exports = {
    get_hour:get_hour,
    get_current_time: get_current_time,
    monipulation_data_first:monipulation_data_first,
    // get_data:get_data,
    get_tomorrow_time:get_tomorrow_time
}

