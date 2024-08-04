const { model, Schema } = require('mongoose');

const warnSchema = new Schema({
  Guild: String,
  User: String,
  Content: Array
});
module.exports = model('warnSchema', warnSchema)