(() => {
  console.log('Union types')

  type Hero = {
    name: string;
    age: number;
    canFly: boolean;
    getName?: () => string;
  }

  let myCustomVariable: (string|number|Hero) = 'Jack'
  console.log(myCustomVariable)
  myCustomVariable = 19
  console.log(myCustomVariable)
  myCustomVariable = {
    name: 'Jack',
    age: 19,
    canFly: false
  }
  console.log(myCustomVariable)
})()