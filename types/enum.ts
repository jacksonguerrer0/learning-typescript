(() => {
  console.log('Enumerations')
  // only exists in TS

  enum AudioLevel {
    min = 10,
    medium,
    max
  }

  const audioMin: AudioLevel = AudioLevel.min

  console.log({
    AudioLevel,
    audioMin
  })
})()