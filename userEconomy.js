const { model, Schema } = require('mongoose');

const userEconomySchema = new Schema({
  User: String,
  Wallet: Number,
  Bank: Number,
  BankLimit: Number,
  Inventory: Array,
  DailyLastUsed: Date,
  WeeklyLastUsed: Date,
  MonthlyLastUsed: Date,
  WorkLastUsed: Date,
  BegLastUsed: Date,
  RobLastUsed: Date,
  HuntLastUsed: Date,
  FishLastUsed: Date,
  DigLastUsed: Date,
  SearchLastUsed: Date
});
module.exports = model('usesEconomys', userEconomySchema);