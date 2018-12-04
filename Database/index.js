const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/habits';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  autoIndex: true
});

const db = mongoose.connection
  .once('open', () => {
    console.log('Connected to MongoDB');
  })
  .on('error', () => {
    console.log('Cannot connect to MongoDB')
  });
module.exports = db;