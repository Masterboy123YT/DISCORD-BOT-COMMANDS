const { model, Schema } = require('mongoose')

const leaveSchema = new Schema({
  Guild: String,
  Channel: String,
  Type: String
});
module.exports = model('leave', leaveSchema);