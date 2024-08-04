const { model, Schema } = require('mongoose')

const modmail = new Schema({
    Guild: String,
    Category: String
})

module.exports = model('modmails', modmail)