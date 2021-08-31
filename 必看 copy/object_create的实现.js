

//本质是让参数变成原型
//而new的本质是 先创建空object对象 然后原型赋值 然后apply调用构造
//二object create 就是一个空对象  创建一个构造函数 构造函数的属性赋值 然后new 创建这个 实例
Object.prototype=function createObj(o) {
    function F() {}
    F.prototype = o;
    return new F();
}


//先弄一个函数对象 把实体赋给他 然后 new 调用这个构造函数即可.
Object.prototype.create1=(o)=>{
    function obj(){}
    obj.prototype=o;
    return new obj();
}

console.log(Object.create({fuck:111}).fuck)



