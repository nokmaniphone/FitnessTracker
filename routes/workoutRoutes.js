const router = require('express').Router()
const Workout = require('../models')

//update a workout
router.put('/workouts/:id', (req, res) => {
  //pushes the excercise into the specifeid id
  Workout.findByIdAndUpdate(req.params.id, { $push: { excercises: req.body } })
    .then((workout) => res.json(workout))
    .catch(error => console.error(error))
})

// get all workouts
router.get('/workouts', (req, res) => {
  Workout.find(req.body)
  .then(workouts => res.json(workouts))
  .catch(error => console.log(error))
})

router.get('/workouts/rang', (req, res) => {
  Workout.find(req.body).limit(7)
  .then( (workout) => {
    res.json(workout)
  })
  .catch(error => console.log(error))
})

// post a workout
router.post('/workouts', (req, res) =>{
  console.log(req.body)
  Workout.create(req.body)
  .then( (workout) => res.json(workout))
  .catch(error => console.error(error))
})

//put a workout
router.put('/workouts/:id', (req, res) => {
  Workout.update({id: req.params.id}, req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.log(e))
})

//delete a workout
router.delete('/workouts', (req, res) => {
  Workout.findByIdAndRemove(req.params.id)
  .then( () => res.sendStatus(200))
  .catch(error => console.log(e))
})

module.exports = router