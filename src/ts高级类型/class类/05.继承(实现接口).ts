interface Singale {
  sing(): void
  name: string
}

class Person implements Singale {
  name = 'jack'
  sing() {
    console.log('哈哈哈')
  }
}