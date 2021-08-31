
//class 对于 = 号声明的方法、变量，都会将其作为实例的属性，而对于非 = 号声明的属性，则是放在原型链上
class Animal { 
    sayName = () => { throw new Error('你应该自己实现这个方法');  //syanmae
} }
class Monkey extends Animal { 
    sayName=function(){ console.log('I love coding');  //(syanm)
} }
const monkey = new Monkey(); 

console.log(monkey instanceof Animal)
console.log(monkey instanceof Monkey);
console.log(monkey.__proto__,monkey.__proto__.__proto__)
console.log(Monkey)
console.log(Monkey.prototype,Monkey.prototype.__proto__)
monkey.sayName();
