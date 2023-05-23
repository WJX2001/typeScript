
// 接口
interface IPerson {
    name: string
    age: number
    sayHi() :void
}
// 使用接口
let person:IPerson = {
    name:'wjx',
    age: 18,
    sayHi() {}
}

// interface和type(类型别名)的对比

// 类型别名
type interface1 ={
    name: string
    age: number
    sayHi(): void
}

type NumStr = number | string