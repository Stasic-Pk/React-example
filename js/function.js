function func(num1 = 0.5, num2 = 6) {
  console.log("num1 + num2 =", num1 + num2)
}

func(1, 12, 2)

const arrowSum = (x, y) => x + y

console.log(arrowSum(1, 1))

function pow(x, y) {
  let res = x

  for (let i = 0; i < y - 1; i++) {
    res = res * x
  }
  return res
}

console.log(pow(3, 3))
