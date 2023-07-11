(() => {
  console.log('Function Type')

  const chiken = (isAdult: boolean = false): string => {
    return isAdult ? 'Cucurucu' : 'Pioo'
  }
  const cow = (): string => 'Muuuu';
  const dog = (msg: string): string => msg;

  // Add type for functions using  a function with params and return
  let execute_function: (y:boolean) => string;
  execute_function = chiken
  execute_function(true)

  let execute_cow: () => string
  execute_cow = cow
  execute_cow()

  let execute_dog: (x:string) => string
  execute_dog = dog
  execute_dog('Text')

  console.log({
    execute_function, cow
  })
})()