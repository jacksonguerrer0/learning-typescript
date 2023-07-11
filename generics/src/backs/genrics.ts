// Copy

import { genericFunctionOne, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Villian, Hero } from "../interfaces";

console.log('Hola Mundo!');
console.log(genericFunctionOne(3.1416))
// error..
// console.log(genericFunctionOne('Hola'))

console.log(genericFunction(3.1416))
console.log(genericFunction('Hola'))

console.log(genericFunctionArrow(3.1416))
console.log(genericFunctionArrow('Hola'))

console.log('========================')
const deadpool = {
  // name: 'Deadpool',
  // realName: 'Wilson...'
  dangerLevel: 198
}
console.log(genericFunctionArrow<Villian>(deadpool))



