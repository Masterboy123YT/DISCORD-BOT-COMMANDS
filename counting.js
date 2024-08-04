const { model, Schema } = require('mongoose')

const countingSchema = new Schema({
  Guild: String,
  Channel: String,
  Count: Number,
  LastUser: String,
  Type: String
});
module.exports = model('counting', countingSchema);