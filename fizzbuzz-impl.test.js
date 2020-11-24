const fizzBuzzImpl = require("./fizzbuzz-impl");

describe("FizzBuzz Testing", () => {
  /*  it("failing test", () => {
    const result = fizzBuzzImpl.validation(3);
    expect(result).toBe("Fizz");
  });
*/
  it("Fizz test", () => {
    //const result = fizzBuzzImpl.validation(3);
    expect(fizzBuzzImpl.validation(3)).toBe("Fizz");
    expect(fizzBuzzImpl.validation(9)).toBe("Fizz");
    expect(fizzBuzzImpl.validation(27)).toBe("Fizz");
  });

  it("Buzz test", () => {
    //const result = fizzBuzzImpl.validation(3);
    expect(fizzBuzzImpl.validation(5)).toBe("Buzz");
    expect(fizzBuzzImpl.validation(20)).toBe("Buzz");
    expect(fizzBuzzImpl.validation(100)).toBe("Buzz");
  });

  it("FizzBuzz test", () => {
    //const result = fizzBuzzImpl.validation(3);
    expect(fizzBuzzImpl.validation(15)).toBe("FizzBuzz");
    expect(fizzBuzzImpl.validation(45)).toBe("FizzBuzz");
    expect(fizzBuzzImpl.validation(75)).toBe("FizzBuzz");
  });

  it("other cases test", () => {
    //const result = fizzBuzzImpl.validation(3);
    expect(fizzBuzzImpl.validation(7)).toBe("7");
    expect(fizzBuzzImpl.validation(11)).toBe("11");
    expect(fizzBuzzImpl.validation(2)).toBe("2");
  });
});
