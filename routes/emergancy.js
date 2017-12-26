'use strict';
var express = require('express');
var router = express.Router();
var Beach = require('../models/beach');
var Backup = require('../models/backup');
var Coordinates = require('../models/coordinates_list');


module.exports = router;

/**
 * data recovery in case of beaches deletation accidently
 * @type {[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}
 */

var a1 = [
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


router.post('/add_multi',function(req,res,next){
    // for(var i=0;i<req.body.coords.length;i++) {

    for(var i=0;i<a1.length;i++){
        //  a[i].name = names[i];
        // a1[i].city = a1[i];
        var BeachData = {
            lat: a1[i].lat,//req.body.coords[i].lat,
            lon: a1[i].lon,//req.body.coords[i].lon,
            name: names_b[i], //req.body.name[i],
            // jellyfish_lvl: req.body.jellyfish_lvl,
            disabilities_status: disa_b[i],//req.body.disabilities_status[i],
            blue_flag: blue_f_b[i],// req.body.blue_flag[i],
            city: ab[i],
            weather_general:[]//req.body.city[i]

            //time_zone:req.body.time_zone,
            //report_jellyfish:req.body.report_jellyfish
        }


        Backup.create(BeachData, function (error, Back) {
            if (error) {
                return next(error);
            } else {
                //return res.send("ok got it");
                console.log("ok")
            }
        });
    }
    res.send("fin")



    //  }
})