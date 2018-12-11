const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db =require('./index.js')
let habitSchema = new Schema({
    name: String,
});

const Habits = mongoose.model('Habit', habitSchema);
module.exports = Habits;
