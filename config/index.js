module.exports = require('mongoose').connect(process.env.MONGODB_URL || process.env.LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

