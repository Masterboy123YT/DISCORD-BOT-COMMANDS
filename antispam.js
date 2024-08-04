const { model, Schema } = require('mongoose')

const spamSchema = new Schema({
  Guild: String,
  Disabled: String
})

module.exports = model('spam', spamSchema)