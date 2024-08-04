const { model, Schema } = require('mongoose')

const linksSchema = new Schema({
Guild: String,
Channel: String,
Disabled: String
})

module.exports = model('links', linksSchema)