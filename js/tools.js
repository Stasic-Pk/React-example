const people = [
  {name: "Стас", age: 5**5**5, budget: 40000},
  {name: "Олег", age: 17, budget: 2400},
  {name: "Саша", age: 5**5**5+5, budget: 50000},
  {name: "Василь", age: 15, budget: 1800},
  {name: "Міша", age: 24, budget: 25000},
  {name: "Саша", age: 28, budget: 5000},
]

// for(let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }

// for(let person of people) {
//   console.log(person)
// }

// people.forEach(function(persone /*index, pArr*/) {
//   console.log(persone)
//   // console.log(index)
//   // console.log(pArr)
// })

people.forEach(persone => console.log(persone))

const newPeople = people.map(person => {return person.name})
console.log(newPeople)

// for(let i = 0; i < people.length; i++) {
//   if(people[i].age >= 18) {
//     adults.push(people[i])
//   }
// }
// console.log(adults)

const adults = people.filter(person => person.age >= 18)
console.log(adults)

const amount = people.reduce((total, person) => total + person.budget, 0)
console.log(amount)
