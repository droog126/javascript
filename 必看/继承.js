function Person(name){
    this.name=name;
    this.colors= ['red','blue','green'];
}
function Child(){
}
Child.prototype = new Person();
//原型继承
//不能动态传参


//构造函数继承
//能动态传参 但 instanceof 父类为false
function Child1(){
    Person.call(this,'me');
}
//不能共享原型
//组合继承  共享父类原型 会调用两次父类构造函数 在原型上创建多余的属性
function child2(){
    Person.call(this,'me')
}
child2.prototype=new Person();
//寄生式继承  独立父类原型  只会调用一次父类构造函数 不会与父类公用一个原型
function child3(){
    Person.call(this,'me')
}
child3.prototype=Object.create(Person.__proto__);


class Person1{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class startPeson extends Person1{
    constructor(name,age,sex){
        super(name,age)
        this.sex=sex;
    }
}

startPeson.__proto__==Person1

const test1=new startPeson('tao',18,'nan');
console.log(test1)
console.log(test1.__proto__);
console.log(Object.toString.call(Person));

//寄生式组合继承
//通过创建空函数 F 获取父类原型的副本。 一个是直接继承父类原型
Child.prototype=Object.create(Person.prototype);
Child.prototype.constructor=Child;