
let person: { name:string; age:number; sayHi():void ;greet(name:string):void} = {
    name:'wjx',
    age: 18,
    sayHi() {},
    greet(name) {}
}

let person1: { 
    name:string
    age:number 
    // sayHi():void 
    sayHi: () => void
    greet(name:string):void
} = {
    name:'wjx',
    age: 18,
    sayHi() {},
    greet(name) {}
}