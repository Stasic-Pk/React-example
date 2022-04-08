class Person {

  name

  constructor(name) {
    this.name = name
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`)
  }

}

const consol = new Person('console');

consol.introduceSelf()
