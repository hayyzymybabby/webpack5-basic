function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world')
    }, 1000)
  })
}

async function hello() {
  let string = await getString()
  console.log(string)
}

export default hello
