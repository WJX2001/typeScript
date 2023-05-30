
class Person {
  age: number
  gender = '男'

  constructor(age:number,gender:string) {
    this.age = age
    this.gender = gender
  }
}
const son = new Person(18,'男')
console.log(son)