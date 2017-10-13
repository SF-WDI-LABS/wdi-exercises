/*
 * This file establishes a connection to the Mongo Database
 * installed on your computer.
 */
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cars");

mongoose.Promise = global.Promise;

// Here we add any models we create to module.exports
module.exports.Car = require('./car.js');