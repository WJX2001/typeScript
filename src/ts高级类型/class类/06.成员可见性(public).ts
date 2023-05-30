class Animal {
  public move() {
    console.log('走两步')
  }
}

class Dog extends Animal {

  bark() {
    console.log('旺旺!')
  }
}

const d = new Dog()
d.move()

