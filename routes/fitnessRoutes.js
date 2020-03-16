const router = require('express').Router()
const Fitness = require('../models')

// get all fitness
router.get('/fitness', (req, res) => {
  Fitness.find()
  .then(fitness => res.json(fitness))
  .catch(error => console.log(error))
})

// create a fitness
router.post('/fitness', (req, res) =>{
  console.log(req.body)
  Fitness.create({
    exercises: [req.body]
  })
  .then( () => res.sendStatus(200))
  .catch(error => console.error(error))
})

//Update a Fitness
router.put('/fitness/:id', (req, res) => {
  //pushes the excercise into the specifeid id
  Fitness.update({_id: req.params.id}, {$push: {excercises: req.body}})
  .then( () => res.sendStatus(200))
  .catch( error => console.error(error))
})

//delete a fitness
router.delete('/fitness/:id', (req, res) => {
  Fitness.findByIdAndDelete(req.params.id)
  .then( () => res.sendStatus(200))
  .catch(error => res.sendStatus(400))
})

module.exports = router