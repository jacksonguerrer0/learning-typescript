(() => {
  console.log('Objects')

  let superman: {name: string, age: number, canFly: boolean, getName?: () => string} = {
    name: 'dummy',
    age: 0,
    canFly: false
  }

  let batman: {name: string, age: number, canFly: boolean, getName?: () => string} = {
    name: 'Batman',
    age: 45,
    canFly: false
  }

  superman = {
    name: 'Superman',
    age: 43,
    canFly: true,
    getName() {
      return this.name
    }
  }

  console.log({
    superman, batman
  })
})()