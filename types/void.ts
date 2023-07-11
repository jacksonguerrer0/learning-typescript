(() => {
  console.log('Void')

  function superman ():void {
    console.log('Laser')
  }

  const batman = ():void => {
    // return 'Batimovil'
  }

  console.log({
    superman, batman
  })
})()