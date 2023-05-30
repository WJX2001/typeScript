class Animal {
  private __run__() {
    console.log('animal内部辅助函数')
  }

  // 这个方法受保护的
  protected move() {
    this.__run__()
    console.log('走两步')
  }
  run() {
    this.__run__()
    this.move()
    console.log('跑起来')
  }
}

class Dog extends Animal {

  bark() {
    this.move()
    console.log('旺旺!')
  }
}

const d = new Dog()
