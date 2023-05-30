console.log(typeof 'hello world');  // 打印string 

let p = {x:1,y:2}

// 类型上下文
function formatPoint(point: typeof p) {} 
// function formatPoint(point: (x:number;u:number)) {}
formatPoint({x:1,y:100})

let num: typeof p.x

function add (num1:number,num2:number) {
  return num1+num2
}

// 错误写法
// let ret: typeof add (1,2)  
