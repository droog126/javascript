function fn(name, age){
    this.name = name
    this.age = age
}


function myNew(fn){
    const restArgs = [].slice.call(arguments, 1)
    //arguments就是数组但是是最原始的 他没有方法slice的方法

    console.log(restArgs)
    const ins = new Object()
    ins.__proto__ = fn.prototype;
    let res = fn.apply(ins, restArgs)
    return ins
  }
  
  let instance = myNew(fn, 'jack', '20')
  console.log(instance)


function mynew2(fn){
  const rest_arg=[].slice.call(arguments,1);
  let ins=new Object();
  //实例传递
  ins.__proto__=fn.prototype;
  //调用构造
  fn.apply(ins,rest_arg);
  return ins;
}

let instance2 = mynew2(fn, 'jack', '20')
console.log(instance2)