const impl = require("./fizzbuzz-impl");

module.exports = {
  validation: function (req, res, next) {
    res.send({
      variable: req.params.variable,
      result: impl.validation(req.params.variable),
    });
  },
};
