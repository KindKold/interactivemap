var express = require('express');
var router = express.Router();
var Location = require('../models').Location;

//show all locations
router.get('/locations', function (req, res) {
  Location.find({}, function(err, locations) {
    if (err) throw err;

    res.send(locations);
  });
});

//display location by id
router.get('/locations/:id', function (req, res) {
  Location.find({ id: req.params.id }, function(err, location) {
    if (err) throw err;

    if (location.lenght > 0) {
      res.send(location);
    } else {
      res.send('Location not find');
    }
  });
});

module.exports = router;
