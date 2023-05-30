interface Point {
  x: number
  y: number
}
interface Point2D {
  x: number
  y: number
}
interface Point3D {
  x: number
  y: number
  z: number
}

let p1: Point
// let p2: Point2D = p1
// let p3: Point3D

class Point4D {
  x: number
  y: number
  z: number
}
let p3: Point2D = new Point4D()
