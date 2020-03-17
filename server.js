const express = require('express')
const {join} = require('path')
const app = express()
 
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//bring in routes
app.use(require('./routes'))
//html routes

//route for excercise.html
app.get('/exercise', (req, res) => {
  res.sendfile(join(__dirname, 'public/exercise.html'))
})

//route for stats.html
app.get('/stats', (req, res) => {
  res.sendfile(join(__dirname, 'public/stats.html'))
})


require('./config')
.then( () => app.listen(process.env.PORT || 3000))
.catch(error => console.error(error))