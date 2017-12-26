'use strict';
var mongoose = require('mongoose');

var BeachSchema = new mongoose.Schema({
    lat: {
        type: Number,
        unique: false,
        require: true,
        trim: true
    },
    lon:{
        type: Number,
        unique: false,
        require: true,
        trim: true
    },
    name:{
        type:String,
        unique: false,
        require: true,
        trim: true
    },
    jellyfish_lvl:{
        type:Number,
        unique: false,
        require: true,
        trim: true
    },
    report_jellyfish:{ //?
        type:Number,
        unique: false,
        require: true
    },
    disabilities_status:{
        type:Boolean,
        required:true
    },
    blue_flag:{
        type:Boolean,
        required:true
    },
    weather_general:{ //future use...
        type:Array,
        required: false
    },
    weather_hourly:{
        type:Array,
        required: false
    },
    weather_current:{
        type:String
    },
    weather_tomorrow:{
        type:String,
        required: false
    },
    weather_2days:{
        type:String,
        required: false
    },
    weather_3days:{
        type:String,
        required: false

    },
    city:{
        type:String,
        required: false
    },
    time_zone:{
        type:String,
        required: false

    }
});



var Beach = mongoose.model('Beach', BeachSchema);
module.exports = Beach;