// async function x(time = 1000, x = 2) {
//   setTimeout(() => {
//     console.log(x)
//   }, time);
// }

// x(6000, 1)
// x()

// async function y() {
//   await x(4000, 4)
// }

// y()

// console.log(3)

let time = 0

for(let i = 0; i < 15; i++) {
  if(i % 2 == 0) {
    time = i * 1000
  } else{
    time = i * 2000
  }
  setTimeout(() => {
    console.log(i)
  }, time);
}
