const readline = require('readline').createInterface({
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

function input() {
  for (let index = 0; index < 1; index++) {
      readline.question("введите цифри ", number => {
        readline.close()
        console.log(index),
        arrNum[index] = number
        console.log(arrNum)
      })
  }
}

for (let i = 0; i < 40; i++) {
  input()
}
