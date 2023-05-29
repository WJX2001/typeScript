// const aLink = document.getElementById('link')
// TODO: 正确写法
const aLink = document.getElementById('link') as HTMLAnchorElement

// 语法二
const aLink1 = <HTMLAnchorElement>document.getElementById('link')

aLink.href

