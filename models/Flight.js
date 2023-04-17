// models/Flight.js
import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String, 
    enum: ["American", "Southwest", "United"]
  },
  airport: {
    type: String, 
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"
  },
  flightNo: {
    type: Number, 
    min: 10, 
    max: 9999
  },
  departs: {
    type: Date, 
    default: function() {
    const now = new Date()
    const nextYear = new Date(now.setFullYear(now.getFullYear() + 1))
    return nextYear
    } 
  }
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight,
}






// const mongoose = require('mongoose');

// const flightSchema = new mongoose.Schema({
//   airline: {
//     type: String,
//     enum: ['American', 'Southwest', 'United'],
//     required: true,
//   },
//   airport: {
//     type: String,
//     enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
//     default: 'DEN',
//   },
//   flightNo: {
//     type: Number,
//     required: true,
//     min: 10,
//     max: 9999,
//   },
//   departs: {
//     type: Date,
//     default: () => {
//       const now = new Date();
//       const nextYear = new Date(now.setFullYear(now.getFullYear() + 1));
//       return nextYear;
//     },
//   },
// });

// const Flight = mongoose.model('Flight', flightSchema);

// module.exports = Flight;
