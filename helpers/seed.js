var Pricing = require('../models/Pricing');

function seed() {
  Pricing.model.find(function(err, coupons) {
    if (coupons.length === 0) {
      console.log('Seeding Pricing table.');

      return Pricing.populate();
    }
  });
}

module.exports = seed;