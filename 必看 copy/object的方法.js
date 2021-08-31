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

//Object.keys( )不会走原型链，而for in 会走原型链
