var express = require('express');
var router = express.Router();
var Pricing = require('../models/Pricing');

router.get('/', function(req, res) {
  Pricing.model.find(function(err, coupons) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(JSON.stringify(coupons));
    }
  });
});

router.get('/:id', function(req, res) {
  Pricing.model.findById(req.params.id, function(err, coupon) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(JSON.stringify(coupon));
    }
  });
});

module.exports = router;
