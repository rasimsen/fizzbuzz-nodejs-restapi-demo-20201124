const service = require("./fizzbuzz-service");

const controllers = {
  validation: function (req, res) {
    service.validation(req, res, function (err, fizzBuzzResult) {
      if (err) {
        res.send(err);
      }
      res.json(fizzBuzzResult);
    });
  },
};

module.exports = controllers;
