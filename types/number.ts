(() => {
  console.log('Numbers')
  const currentYear: number = 2023
  const lastYear: number = 2022

  if (currentYear < lastYear) {
    console.log('Nooow')
  } else {
    console.log('Laaaast year')
  }

  // NaN is considered a Number
  const number = Number('123AD')
  console.log({
    currentYear,
    lastYear,
    number
  })
})()