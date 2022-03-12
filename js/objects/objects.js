const { object } = require("prop-types")

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

function makeUserInfo(name, age) {
  return {
    name, // name: name, = name,
    age, // age: age, = age,
  }
}
let user = makeUserInfo("stas", 13)
console.log(user)

let userInfo3 = {
  name: "stas",
}

console.log(userInfo3)

userInfo3.age = 13 //назва обєкту, через .  імя компонента який хочеш зробити і через = його значення (значення може бути обєктом) наприклад userInfo.age = 13

console.log(userInfo3)

userInfo3["likes js"] = true

console.log(userInfo3)

delete userInfo3["likes js"]

console.log(userInfo3)

userInfo3.address = {
  sity: "lviv",
  street: "Freedom",
}

console.log(userInfo3)

let userInfo4 = {
  name: "stas",
  age: 13,
}

console.log(userInfo4)

userInfo4.name = "Stas"

console.log(userInfo4)

let user1 = userInfo4

console.log(userInfo4)

const keys = Object.keys(userInfo4)

for(let i = 0; i < 2; i++) {
  console.log(userInfo4[keys[i]])
}
