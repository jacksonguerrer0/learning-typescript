(() => {
  console.log('Functions')

  const buildMsg = () => {
    return 'Signal activated!'
  }

  const msg = buildMsg()

  const signal = (msg: string): void => {
    console.log(msg)
  }

  signal(msg)

})()