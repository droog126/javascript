//函数内声明提前，赋值位置不变

//let 立即执行函数
(function(){
    var a=1;
})()
//const
//劫持set
var __const = function __const(data, value) {
    window.data = value // 把要定义的data挂载到window下，并赋值value
    Object.defineProperty(window, data, { // 利用Object.defineProperty的能力劫持当前对象，并修改其属性描述符
      enumerable: false,
      configurable: false,
      get: function () {
        return value
      },
      set: function (data) {
        if (data !== value) { // 当要对当前属性进行赋值时，则抛出错误！
          throw new TypeError('Assignment to constant variable.')
        } else {
          return value
        }
      }
    })
}
  