let obj = {
  name: "stas", 
  age: 13,
  bool: true,
  detals: {
    about: "lol"
  }
}

console.log(obj.name)
console.log(obj.age)
console.log(obj.detals.about)
console.log(obj.bool)

let firstPart = "likes"
let userInfo = {
  name: "Stas",
  let: 13,
  [firstPart]: true,
}
console.log(userInfo[firstPart])

let key = "name"
console.log(userInfo[key])

let id = Symbol("id")
let userInfo2 = {
  name: "name",
  age: 1542,
  [id]: ""
}
console.log(userInfo2)
