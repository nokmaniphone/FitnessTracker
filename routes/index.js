const router = require('express').Router()

router.use('/api', require('./workoutRoutes.js/index.js'))

module.exports = router