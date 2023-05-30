class Person {
  age: number
  gender = '男'

  constructor(age:number,gender:string) {
    this.age = age
    this.gender = gender
  }
}

const p = new Person(16,'男')

p.age = 16 // Person.age: number
p.gender  // Person.gender: string


