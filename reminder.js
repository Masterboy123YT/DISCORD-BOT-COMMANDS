const mongoose = require('mongoose');

// Define the schema for the Reminder
const reminderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,  // Ensure every reminder is linked to a Discord user ID
        index: true      // Create an index for faster query performance on userId
    },
    reminderTime: {
        type: Date,
        required: true,  // The time when the reminder should trigger
        index: true      // Indexing to facilitate sorting and querying by time
    },
    content: {
        type: String,
        required: true   // The content/message of the reminder
    }
}, {
    timestamps: true  // Automatically manage createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Reminder', reminderSchema);