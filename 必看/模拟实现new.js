function fn(name, age){
    this.name = name
    this.age = age
}


// name  age (fn.prototye) 都被给到了创建的

function myNew(fn){
  const restArgs = [].slice.call(arguments, 1)
  //arguments就是数组但是是最原始的 他没有方法slice的方法
  const ins = new Object()
  ins.__proto__ = fn.prototype;  // (fn.prototype)
  fn.apply(ins, restArgs)   //  fn(fn.prototype)
  // ins._constructor=fn;
  // ins._constructor(restArgs);
  // delete ins._constructor;

  return ins
}
  
let instance = myNew(fn, 'jack', '20')
console.log(instance)



function myNew2(fn){
  const restArgs = [].slice.call(arguments, 1)
  //arguments就是数组但是是最原始的 他没有方法slice的方法
  const ins = new Object()
  ins.__proto__ = fn.prototype;

  
  ins.func=fn;
  const r=ins.func(...restArgs);
  delete ins.func;

  return ins
}
let ins = myNew2(fn, 'jack', '20')
console.log(ins)