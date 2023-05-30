// 对比
interface A {
  fn: (value: number) => string
}
interface B {
  fn: (value: string) => string
}

/**
 * 接口“B”错误扩展接口“A”。
  属性“fn”的类型不兼容。
    不能将类型“(value: string) => string”分配给类型“(value: number) => string”。
      参数“value”和“value” 的类型不兼容。
        不能将类型“number”分配给类型“string”。
 */
// interface B extends A {
//   fn: (value: string) => string  
// }

// 联合类型写法
type C  = A & B

// let c: C = {
//   fn(value: number | string) {
//     return ''
//   }
// }

let c: C
 



