async function x(time = 1000, x = 2) {
  console.log(1)
  setTimeout(() => {
    console.log(x)
  }, time);
}

x()

async function y() {
  await x(4000)
}

y()

console.log(3)
