const mongoose = require('mongoose')

const Workout = mongoose.model('Workout', new mongoose.Schema({
  day: {
    type: Date,
    //default sets to the day that item was created
    default: Date.now
  },
  exercises:[{
    type: {type: String},
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
}))

module.exports = Workout