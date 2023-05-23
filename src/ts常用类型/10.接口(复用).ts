
interface Point2D {x:number;y:number} 

// 接口复用 （继承）
interface Point3D extends Point2D {z:number}

let p3: Point3D = {
    x:1,
    y:0,
    z:3
}