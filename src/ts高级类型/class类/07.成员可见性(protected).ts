class Animal {
  // 这个方法受保护的
  protected move() {
    console.log('走两步')
  }
  run() {
    this.move()
    console.log('跑起来')
  }
}

//! 错误写法 实例对象不能获得protected声明后的变量
// const a = new Animal()
// a.move()

class Dog extends Animal {

  bark() {
    this.move()
    console.log('旺旺!')
  }
}

const d = new Dog()


