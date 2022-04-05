const chalk = require('chalk')
const { execFileSync } = require('child_process')

let randomNumber = []
let number = ''
let tags = []
let q = 0
let wonTicket = []


for (let i = 0; i < 4; i++) {
  let x = (Math.floor(Math.random() * 10))

  if (!randomNumber.includes(x)) {
    randomNumber[i] = x;
  } else {
    while (randomNumber.includes(x)) {
      x = (Math.floor(Math.random() * 10))
    }

    randomNumber[i] = x;
  }
}
// console.log(randomNumber)
console.log(chalk.gray("to exit enter x"))

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function input(str) {
  return new Promise((res, rej) => {
    readline.question(str, number => {
      res(number);
    });
  })
}

function exit() {
  readline.close();
}

async function play() {
  while (true) {
    inputNumber = await input(chalk.gray(' > '))

    const number = Array.from(inputNumber)

    for (let i = 0; i < 4; i++) {
      if (number[i] == randomNumber[i]) {
        tags[i] = chalk.green("B")
        wonTicket[i] = "B"
      } else {
        for (let j = 0; j < 4; j++) {
          if (number[i] == randomNumber[j]) {
            tags[i] = chalk.yellow("K")
          }
        }
      }
      q++
      if (tags.length != q) {
        tags[i] = chalk.red("-")
      }
    }

    console.log(...number)
    console.log(...tags)

    if (wonTicket.length == 4) {
      console.log(chalk.greenBright("[+] you won"))
      break
    } else if(number.length == 1) {
      break
    } else {
      tags.length = 0;
      q = 0
      wonTicket.length = 0
    }


  }

  exit();
}

play()
