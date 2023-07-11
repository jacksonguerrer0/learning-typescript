(() => {
  console.log('Functions')

  interface Sum {
    (a: number, b: number): number
  }

  let sumNumbers: Sum;

  sumNumbers = (a, b) => {
    return a + b
  }

  sumNumbers(2,2)
})()