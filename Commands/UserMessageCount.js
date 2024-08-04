const { model, Schema } = require('mongoose')

const userMessageCountSchema = new Schema({
  Guild: String,
  User: String,
  MessageCount: Number,
});
module.exports = model('userMessageCOOunt', userMessageCountSchema);
