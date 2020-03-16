const router = require('express').Router()

router.use('/api', require('./fitnessRoutes.js'))

module.exports = router