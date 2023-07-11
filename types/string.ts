(() => {
  console.log('Strings')

  const batman: string = 'Batman'
  const superman: string = 'Superman'

  // Back trick
  console.log(`I'm ${batman}`)

  // Execute toUpperCase when superman[100] is deferent to undefined
  console.log(superman[100]?.toUpperCase() || 'Upps, not found')
})()