
// // 1.参数个数: 参数少的可以赋值给参数多的
// type F1 = (a:number) => void
// type F2 = (a:number,b:number) => void

// let f1: F1
// let f2: F2 = f1

// f2 = f1
// console.log(f2)


// 2.参数类型
// type F1 = (a:number) => void 
// type F2 = (a:number) => void

// let f1: F1
// let f2: F2


interface Point2D {
  x:number
  y:number
}

interface Point3D {
  x:number
  y:number
  z:number
}

type F2 = (p:Point2D) => void // 相当于2个参数
type F3 = (p:Point3D) => void // 相当于3个参数

let f2: F2
let f3: F3

f2 = (p: Point2D) => {
  // 函数体
}

f3 = f2
