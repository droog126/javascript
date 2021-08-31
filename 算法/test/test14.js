function f(){ return f; }

console.log(f())
console.log(new f())
console.log(new f() instanceof f);//前者是个函数
console.log(new f() instanceof Function)