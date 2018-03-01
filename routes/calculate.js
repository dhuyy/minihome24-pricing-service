var express = require('express');
var router = express.Router();
var Pricing = require('../models/Pricing');

router.get('/:code/:price', function(req, res) {
  Pricing.model.findOne({ code: req.params.code }, function(err, coupon) {
    if (!coupon) {
      res.status(404).send(err);
    } else {
      var total = (req.params.price * coupon.discount) / 100;

      res.send(JSON.stringify({
        priceWithDiscount: total
      }));
    }
  });
});

module.exports = router;
