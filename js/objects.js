let obj = {
  name: "stas", 
  age: 13,
  detals: {
    about: "lol"
  }
}

const x = [
  {
    "id":  1,
    "masterID":  1,
    "workingStartTime":  9,
    "workingEndTime":  11,
    "weekendDay":  true,
    "date":  "2022-02-12",
    "createdAt":  "2022-01-28T10:00:25.543Z",
    "updatedAt":  "2022-01-28T10:00:25.543Z"
  },
  {
    "id": 2,
    "masterID": 1,
    "workingStartTime": 12,
    "workingEndTime": 15,
    "weekendDay": null,
    "date": "2022-02-07",
    "createdAt": "2022-01-28T10:00:25.552Z",
    "updatedAt": "2022-01-28T10:00:25.552Z"
  }
]

let sum = 0

for(let i = 0; i < x.length; i++) {
  sum += x[i].workingStartTime
}
console.log(sum)


// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.detals.about)
