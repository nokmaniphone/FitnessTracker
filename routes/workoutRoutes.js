const router = require('express').Router()
const Fitness = require('../models')

// get all fitness
router.get('/workouts', (req, res) => {
  Workout.find()
  .then(workouts => res.json(workouts))
  .catch(error => console.log(error))
})

// create a fitness
router.post('/workouts', (req, res) =>{
  console.log(req.body)
  Workout.create({
    exercises: [req.body]
  })
  .then( () => res.sendStatus(200))
  .catch(error => console.error(error))
})

//Update a Fitness
router.put('/workouts/:id', (req, res) => {
  //pushes the excercise into the specifeid id
  Workout.update({_id: req.params.id}, {$push: {excercises: req.body}})
  .then( () => res.sendStatus(200))
  .catch( error => console.error(error))
})

//delete a fitness
router.delete('/workouts/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
  .then( () => res.sendStatus(200))
  .catch(error => res.sendStatus(400))
})

module.exports = router