const backendData = {
  server: "com",
  port: 2000,
  status: "working"
}

console.log("request data...")

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("preparing data...")
    resolve(backendData)
  }, 2000);
})

p.then(() => {
  console.log("promise resolved...")

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      backendData.modified = true
      console.log(backendData)
      }, 2000);
    })

    p2.then(clientData => {
      console.log("Data receied", backendData)
    })
  })
