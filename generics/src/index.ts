import { getPokemon } from "./generics/get-pokenmon";

console.log('========== #2 ==========')
getPokemon(20).then((res) => {
  console.log(res.name)
}).catch(() => {
  throw new Error("Error with getPokemon");
}).finally(() => {
  console.log('End getPokemon')
})