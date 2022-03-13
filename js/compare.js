let x = 1
let y = 10

if (x === 1) {
  console.log("1 Yes")
}

if (x && 10) {
  console.log("2 Yes")
}

if (x != 1) {
  console.log("3 Yes")
}
if (x != 2) {
  console.log("4 Yes")
}

if (x || 0) {
  console.log("5 Yes")
}

if (true || false) {
  console.log(1)
}

if (false || false) {
  console.log(1)
}


if (true && true) {
  console.log('&&')
}

if (true && false) {
  console.log('&&')
}

if (false && false) {
  console.log('&&')
}

if (1 == '1') {
  console.log('==')
}

if (1 === '1') {
  console.log('===')
}

let port = 3000

console.log(port || 5000, '||')
console.log(undefined ?? 5000, '??')
console.log(false ?? 5000, '??')
