const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const {join} = require('path')
const app = express()
 
app.use(morgan('tiny'))
app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//bring in routes
app.use(require('./routes'))
//html routes
// homepages, rendering index.html
app.get('/', (req, res) => {
  res.sendfile(join(__dirname, 'public', 'index.html'))
})

//route for excercise.html
app.get('/exercise', (req, res) => {
  res.sendfile(join(__dirname, 'public', 'exercise.html'))
})

//route for stats.html
app.get('/stats', (req, res) => {
  res.sendfile(join(__dirname, 'public', 'stats.html'))
})


mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then( () => app.listen(process.env.PORT || 3000))
.catch(error => console.error(error))