const { model, Schema } = require('mongoose')

const usermod = new Schema({
    Guild: String,
    User: String,
    Channel: String
})
module.exports = model('usermod', usermod)