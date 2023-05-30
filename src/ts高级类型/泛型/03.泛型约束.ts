// Type可以代表任意类型，无法保证一定存在length属性，比如
function id2<Type>(value: Type): Type {
  // console.log(value.length) 
  // 可以表示任意类型，但是无法保证一定存在length函数
  return value
}

// 泛型约束
function id3<Type>(value: Type[]): Type[] {
  console.log(value.length)
  return value
}

