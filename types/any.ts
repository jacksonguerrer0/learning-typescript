(() => {
  console.log("Any's")

  const sets: any = 12.734
  let reps: any;
  let exercise: any = 'Curls'

  // Cast or Casting is a way to change a type
  console.log(`(1.) ${(sets as number).toFixed(2)}`)
  console.log(`(2) ${<string>exercise.toUpperCase()}`)

  console.log({
    sets,
    reps,
    exercise
  })
})()