class Person {
  // 设置此属性之后，只能在构造函数中给属性赋值
  // TODO: 只要是readonly来修饰的属性，必须手动提供明确的类型
  readonly age: number = 18

  constructor(age: number) {
    this.age = age
  }


  // 此时不在构造函数内也可以修改属性值
  // readonly不能修饰方法
  // readonly setAge() {
  //   this.age = 20
  // }
}


interface IPerson {
  readonly name:string
}

let obj: IPerson = {
  name: 'jack'
}

// 错误示范
// obj.name = 'wjx' // 无法为“name”赋值，因为它是只读属性