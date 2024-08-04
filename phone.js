const { model, Schema } = require('mongoose')

const phoneSchema = new Schema({
  Guild: String,
  Channel: String,
  Status: String
})

module.exports = model('phones', phoneSchema)