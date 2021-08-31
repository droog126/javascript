//当class的私有变量
class A {
    constructor (x) {
 
        // 定义symbol
     const _x = Symbol('x')
 
        // 利用symbol声明私有变量
        this[_x] = x
    }
 
    showX () {
        return this[_x]
    }
}
 
let a = new A(1)
 
// 1. 第一种方式
a[_x]    // 报错 Uncaught ReferenceError: _x is not defined
 
// 2. 第二种方式
// 自行定义一个相同的Symbol
const x = Symbol('x')
a[x]        // 无法访问，undefined
 
// 3. 第三种方式，可以访问（正解）
a.showX()   