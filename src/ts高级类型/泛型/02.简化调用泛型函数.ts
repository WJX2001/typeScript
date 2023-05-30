function id1<Type>(value: Type): Type {
  return value
}

// 1.以 number 类型显式调用泛型函数
const num3 = id1<number>(10)

// 省略<类型> 来简化泛型函数的调用
let num2 = id1(10)


