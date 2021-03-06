const mongoose = require('mongoose')

const Workout = mongoose.model('Workout', new mongoose.Schema({
  day: {
    type: Date,
    //default sets to the day that item was created
    default: Date.now
  },
  exercises:[{
    type: {type: String},
    name: { type: String },
    duration: { type: Number },
    weight: { type: Number },
    reps: { type: Number },
    sets: { type: Number },
    distance: { type: Number }
  }]
}))

module.exports = Workout