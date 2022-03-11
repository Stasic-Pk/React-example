let arr = [1, 2, 3, 4, 5]

function sum(x, y, z) {
  console.log(x + y + z)
}

sum(...arr)

console.log(...arr)
console.log(arr)
//різниця в тому що arr дасть масив, а якщо записати ...arr то як відільні значеня
