
// 类型兼容性

let arr = ['a','b','c'] 

arr.forEach((item) => {})
arr.forEach((item,index) => {})
arr.forEach((item,index,array) => {})

// 案例
class Point {x:number; y:number} 
class Point2D {x:number; y:number} 

// 将P的类型显式的标明Point
const p: Point = new Point2D()


