'use strict';
var mongoose = require('mongoose');
var CoordinatesList_Schema = new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    country:{
        type:String,
        unique:true,
        required:true
    }
});


var Coordinates_list = mongoose.model('Coordinates', CoordinatesList_Schema);
module.exports = Coordinates_list;