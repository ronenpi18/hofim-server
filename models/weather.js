'use strict';
var mongoose = require('mongoose');
var WeatherSchema = new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    temp:{
        type:String,
        required:false
    }
});


var Weather = mongoose.model('Coordinates', WeatherSchema);
module.exports = Weather;