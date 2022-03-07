let fruits = ['apple', 'banana', 1]

console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[1])

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

fruits.forEach((i) => console.log(i))
fruits.map((i) => console.log(i))

fruits.push(2)
console.log(fruits)

console.log(fruits.indexOf(1))
console.log(...fruits)
