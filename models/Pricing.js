var mongoose = require('mongoose');
var pricingModel = {};

var Pricing = mongoose.model('Pricing',
  new mongoose.Schema({
    code: String,
    discount: Number
  })
);

pricingModel.model = Pricing;

pricingModel.populate = function() {
  new Pricing({
    code: 'WELCOMETOHOME24',
    discount: 90
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });

  new Pricing({
    code: 'IWANTTOBEAHOMIE',
    discount: 50
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });

  new Pricing({
    code: 'HIREMEPLEASE',
    discount: 10
  }).save(function(err) {
    if (err) console.log('Error occured in populating database');
  });
};

module.exports = pricingModel;