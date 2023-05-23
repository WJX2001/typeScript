
// 数组有两种写法 推荐使用number[] 写法
let number: number[]  = [1,3,5]

//? 不推荐
// let strings: Array<string> = ['a','b','c']

let b: boolean[] = [true,false]

// 数组中既有number类型 又有string类型 ，这个数组的类型如何写

//TODO:  联合类型写法
// 添加小括号 表示：首先是数组，然后这个数组中能够出现number或string类型的元素怒
let arr: (number | string)[] = [1,'a',3,'b']

// 不添加小括号，表示: arr1即可以是number类型 又可以是string[]
let arr1: number | string[] = ['a','b']
let arr2: number | string[] = 123
