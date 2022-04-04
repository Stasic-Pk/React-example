// const { Z_ASCII } = require('zlib');
let randomNumber = []
let number = ''
let tags = []
let q = 0


for (let i = 0; i < 4; i++) {
  randomNumber.push(Math.floor(Math.random() * 10));
}
console.log(randomNumber)

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
    inputNumber = await input(' > ');

    const number = Array.from(inputNumber);

    for (let i = 0; i < 4; i++) {
      if (number[i] == randomNumber[i]) {
        tags[i] = "B"
      } else {
        for (let j = 0; j < 4; j++) {
          if (number[i] == randomNumber[j]) {
            tags[i] = "K"
          }
        }
      }
      q++
      if (tags.length != q) {
        tags[i] = "-"
      }
    }

    console.log(...tags)

    if (number == randomNumber) {
      console.log("[+] you won")
      break;
    } else {
      tags.length = 0;
      q = 0
    }

    // if (va === 'x') {
    //   break;
    // }
  }

  exit();
}

play()
