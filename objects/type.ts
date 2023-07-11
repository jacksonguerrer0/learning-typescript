(() => {
  console.log('Types')

  type Hero = {
    name: string
    age: number
    canFly: boolean
    getName?: () => string
  }

  let superman: Hero = {
    name: 'dummy',
    age: 0,
    canFly: false
  }

  let batman: Hero = {
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