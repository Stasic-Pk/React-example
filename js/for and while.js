let arr = [1, 5, 3, 2, 4]
let sum = 0
let b = 0
let m = 0
let am = 0
let x = 0

for(let i = 0; i < arr.length; i++) {
  if(b < arr[i]) {
    b = arr[i]
  }
}

for(let i = 0; i < arr.length; i++) {
  if(m > arr[i]) {
    m = arr[i]
  }
}

for(let i = 0; i < arr.length; i++) {
  sum = sum + arr[i]
}
am = sum / arr.length

for(let i = 0; i < 12; i++) {
  x = x + i
}

console.log("стаканчиків в пвраміді =", x)
console.log("найбільше число =", b)
console.log("найменше число =", m)
console.log("сума всіх чисел =", sum)
console.log("середнє арифмитичне =", am)
