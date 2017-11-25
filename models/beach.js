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
    waves_height:{
        type:Number,
        unique: false,
        require: true
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
    wind_degree:{   //where to find this shit?
        type:Number,
        required:true
    },
    wind_speed:{  //? where to get??
        type:Number,
        required:true
    },
    water_tmp:{ //where from??
        type:Number,
        required:true
    },
    tmp_min:{
        type:Number,
        required:true
    },
    tmp_max:{
        type:Number,
        required:true
    },
    weather:{ //future use...
        type:Array,
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