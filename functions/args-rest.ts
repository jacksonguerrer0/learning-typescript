(() => {
  console.log('Arguments rest')

  // Add ... for arguments optional
  const fullName = (firstName: string, ...restArg: (string)[]): string => {
    const name = `FullName: ${firstName} ${restArg.join(' ')}`

    return name
  }

  const personOne = fullName('Jackson', 'Guerrero', 'true')
  const personTwo = fullName('Jorge')

  console.log({
    personOne,
    personTwo
  })

})()