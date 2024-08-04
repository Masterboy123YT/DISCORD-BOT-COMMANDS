const { model, Schema } = require('mongoose')

const guildEconomySchema = new Schema({
  Guild: String,
  Status: String
});
module.exports = model('guildEconomy', guildEconomySchema);