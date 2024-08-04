const { model, Schema } = require('mongoose')

const ticketSchema = new Schema({
  Guild: String,
  Claimed: Boolean,
  Channel: String,
  Closed: String,
  ClaimedBy: String,
  User: String,
  Reason: String
});
module.exports = model('SchemasTickets', ticketSchema);