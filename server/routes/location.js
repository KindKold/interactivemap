var express = require('express');
var router = express.Router();
var Location = require('../models').Location;

router.get('/locations/add', function (req, res) {
  var location = new Location({
    id: 2,
    name: 'Пицца & коффе',
    coordinates: '@53.22123,23.83433063,17z'
  });

  location.save(function (err) {
    if (err) throw err;

    res.send('New location saved successfully!');
  });
});

module.exports = router;
