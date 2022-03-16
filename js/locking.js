function locking(n) {
  return function() {
    console.log(10 * n)
  }
}

const calc = locking(60)

calc()

function createInc(x) {
  return function(y) {
    return x + y
  }
}

const addOne = createInc(1)
const addTwo = createInc(2)

console.log(addOne(41))

console.log(addTwo(40))
