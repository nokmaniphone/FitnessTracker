module.exports = require('mongoose').connect(process.env.MONGODB_URL || process.env.LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// mongodb://heroku_5jk0qb3l:tdk0ii6cg6dv0rtmv4j5sh9c6g@ds047325.mlab.com:47325/heroku_5jk0qb3l
//process.env.MONGODB_URL