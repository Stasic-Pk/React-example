const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function input() {
  return new Promise((res, rej) => {
    readline.question('Who are you?', name => {
      res(name);
    });
  })
}

function exit() {
  readline.close();
}

async function play() {
  const x = await input();

  const y = await input();

  exit();
}

play()
