const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/fantasy-football-draft-order', function(req, res) {
  if (!req.query) {
    res.status(400).send('need query string');
  } else if (!req.query.names || !req.query.names.length) {
    res.status(400).send('need players');
  } else {
    var array = req.query.names;
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    res.status(200).send(array);
  }
});

app.get('/divisions-completely-random', function(req, res) {
  if (!req.query) {
    res.status(400).send('need query string');
  } else if (!req.query.names || !req.query.names.length) {
    res.status(400).send('need players');
  } else {
    var array = req.query.names;
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    var half = array.length / 2;
    var east = array.splice(0, half);
    var west = array;
    var object = {east: east, west: west};
    res.status(200).send(object);
  }
})


const port = 6095;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = app;
