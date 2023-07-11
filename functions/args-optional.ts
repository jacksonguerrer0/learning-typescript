(() => {
  console.log('Arguments optional')


  // Add ? for arguments optional
  const fullName = (firstName: string, lastName?: string) => {
    return `FullName: ${firstName} ${lastName || '...'}`
  }

  const personOne = fullName('Jackson', 'Guerrero')
  const personTwo = fullName('Jorge')

  console.log({
    personOne,
    personTwo
  })

})()