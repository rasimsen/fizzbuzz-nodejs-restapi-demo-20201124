const fizzBuzzController = require("./fizzbuzz-controller");

module.exports = function (app) {
  app
    .route("/fizzbuzz/validation/:variable")
    .get(fizzBuzzController.validation);
};
