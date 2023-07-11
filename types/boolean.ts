(() => {
  console.log('Booleans')
  const isSuperman:boolean = true
  let isBatman:boolean;
  const isGoku:boolean = (isSuperman) ? false : true

  console.log({
    isSuperman,
    // isBatman,
    isGoku
  })
})()