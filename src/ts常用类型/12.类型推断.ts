// 声明变量并立即初始化值，此时可以自动推断类型
let age = 18

// 如果声明变量但没有立即初始化值，此时，还必须手动添加类型注解
 let a: number
 a = 19


// 初始版本  返回值类型可以省略
 function add (num1:number,num2:number) :number{
    return num1+num2
 }
// 省略返回值
 function add1 (num1:number,num2:number){
    return num1+num2
 }

 