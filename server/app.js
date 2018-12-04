const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Habits = require('../Database/model.js')
const app = express();

let port = 1111;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'))

app.get('/habittracker', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'))
});

app.get('/habit', (req, res) => {
  Habits.find()
  .exec((err, results) => {
    if (err) { res.status(500).send('Error getting data') }
    else { res.send(JSON.stringify(results)) }
  })
})

// app.post('/create', (req, res) => {
//   let habit = new Habit(
//     {
//       name: req.body.name
//     }
//   );
//   habit.save(function (err) {
//     if (err) {
//       console.log(err, 'Error creating new habit')
//     }
//     res.send('Habit Created')
//   })
// });

// app.get('/:id', (req, res) => {
//   Product.findById(req.params.id, function(err, habit) {
//     if(err) {
//       console.log(err, 'Could not find habit')
//     }
//     res.send(habit);
//   })
// })


app.listen(port, () => {
  console.log('Listening on port ' + port);
})