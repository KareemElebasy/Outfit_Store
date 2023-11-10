export default () => {
  const guest_token = useCookie('guest_token')
    if (!guest_token.value) {
      const stringSpace =
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const stringLength = stringSpace.length
      let randomString = ''
      for (let i = 0; i < 64; i++) {
        randomString =
          randomString + stringSpace[Math.floor(Math.random() * stringLength)]
      }
      console.log(randomString)
      useCookie('guest_token').value = randomString
    }
  }