// eslint-disable-next-line no-unused-vars
const FizzBuzz = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 && n % 5 !== 0) {
      console.log("Fizz")
    } else if (n % 3 !== 0 && n % 5 === 0) {
      console.log("Buzz")
    } else if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz")
    } else {
      console.log(n)
    }
  }
}
