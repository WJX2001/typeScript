//TODO: 接口继承

interface Point2D {
  x: number
  y: number
}

// 通过继承 Point2D 具有x/y/z 三个属性
interface Point3D extends Point2D {
  z: number
}

let p3: Point3D = {
  x: 1,
  y: 2,
  z: 3,
}

//TODO: 交叉类型 (同时具备两种属性)

interface Person {
  name: string
  say() : number
}
interface Contact {
  phone: string
}
type PersonDetail = Person & Contact

let obj: PersonDetail = {
  name: 'jack',
  phone: '1234',
  say() {
     return 1
  }
}
