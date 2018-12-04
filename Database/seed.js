const db = require('./index.js');
const Habits = require('./model.js');

let habitList = {};
habitList.name = 'First Habit';

Habits.create(habitList, (err, results) => {
  if (err) {
    console.log('Error creating database')
  }
})