console.log("request data...")

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("preparing data...")
    const backendData = {
      server: "com",
      port: 2000,
      status: "working"
    }
    resolve(backendData)
  }, 2000);
})

p.then(() => {
  console.log("promise resolved...")

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true
      (data)
      }, 2000);
    })

    p2.then(clientData => {
      console.log("Data receied", backendData)
    })
  })

  // Error
