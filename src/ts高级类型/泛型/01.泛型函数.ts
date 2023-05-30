function id<Type>(value: Type): Type {
  return value
}

// TODO:　调用泛型函数

// 1.以 number 类型调用泛型函数
const num1 = id<number>(10)
// 2.以 string 类型调用泛型函数
const str = id<string>('a')



