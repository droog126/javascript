//首先参数就不一样
//new 的本质是把构造函数的属性给 实例 把自己的原型给实例的原型
//object.create 的本质 是以一个连object的方法都没有的空对象 构建构造函数 再用构造函数返回实例

//先弄一个函数对象 把实体赋给他 然后 new 调用这个构造函数即可.
Object.prototype.create1=(o)=>{
    function obj(){}
    obj.prototype=o;
    return new obj();
}

console.log(Object.create({fuck:111}).fuck)



