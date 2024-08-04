const mongoose = require('mongoose');

const autoroleSchema = new mongoose.Schema({
    Guild: {
        type: String,
        required: true,
        unique: true // Ensures there's only one document per guild
    },
    Roles: {
        type: [String], // Array of role IDs
        default: []
    }
});

module.exports = mongoose.model('Autorole', autoroleSchema);
