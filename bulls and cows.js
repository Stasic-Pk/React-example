const num = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let number
let randomNumbers = []
let arrNum = []

for(let i = 0; i < 4; i++) {
  randomNumbers[i] = Math.floor(Math.random() * 9)
}
console.log(randomNumbers)

const numb = num.question(number => {num.close()})

  for (let i = 0; i < 1; i++) {
    for (let index = 0; index < 4; index++) {
      numb
      arrNum[index] = number
      console.log(arrNum)
    }
  }

  // error
