
// 1.单独指定参数、返回值的类型
function add(num1: number,num2: number):number {
    return num1+num2
}

const add1 = (num1: number,num2: number):number => {
    return num1+ num2
}

// 2.同时指定参数、返回值的类型
const add2:(num1:number,num2:number) => number = (num1,num2) => {
    return num1+num2
}



