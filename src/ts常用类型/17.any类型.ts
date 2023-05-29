let obj: any = {x:0}

// 访问不存在的属性 或者赋值
obj.add
obj.ada = 10

// 当作函数使用
obj()

// 赋值给其他类型的变量
let n:number = obj

function add(num1,num2) {}