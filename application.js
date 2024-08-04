// ./STORAGE/application.js
const { model, Schema } = require('mongoose');

const questionSchema = new Schema({
  question: String,
  order: Number,
});

const applicationSchema = new Schema({
  userId: String,
  answers: [{ question: String, answer: String }],
  completed: { type: Boolean, default: false },
});

const setupSchema = new Schema({
  guildId: String,
  questions: [questionSchema],
  submissionChannelId: String,
  roleOnAcceptId: String, // New field for the role to assign on acceptance
  enabled: { type: Boolean, default: true },
});

module.exports = {
  Application: model('application', applicationSchema),
  Setup: model('setup', setupSchema),
};
