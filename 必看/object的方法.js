const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

//Object.assign();
//合并覆盖多个对象 后者覆盖前者
Object.assign(target, source1, source2);
console.log(target);

//Object.getOwnPropertySymbols();
Object.getOwnPropertySymbols();

//obj.hasOwn
//获取原型所有的不可枚举
//object.keys()只是获取实例的特有属性不会遍历原型链和枚举属性
Object.getOwnPropertyNames();
//Object.keys( )不会走原型链，而for in 会走原型链
//obj.hasOwnProperty(proName 方法无法检查该对象的原型链中是否具有该属性，该属性必须是对象本身的一个成员。
//obj.keys();不会走原型链  for in 会走原型链
