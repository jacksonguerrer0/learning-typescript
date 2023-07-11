(() => {
  console.log('Arrays')

  const numbers: number[] = [1,6,8,9,5]
  const strings = ['Jack', 'Guerrero']
  const numbersAndStrings: (number | string)[] = [...numbers, ...strings]

  console.log({
    numbers,
    strings,
    numbersAndStrings
  })
})()