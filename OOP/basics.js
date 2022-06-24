class Person {

  name
  age

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`, this.age)
  }

}

const consol = new Person('console', 12);

consol.introduceSelf()
