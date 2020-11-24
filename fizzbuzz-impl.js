module.exports = {
  validation: function (varible) {
    if (varible % 15 === 0) {
      return "FizzBuzz";
    } else if (varible % 5 === 0) {
      return "Buzz";
    } else if (varible % 3 === 0) {
      return "Fizz";
    }

    return varible + "";
  },
};
