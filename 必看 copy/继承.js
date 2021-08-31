
function Person(name){
    this.name=name;
    this.colors= ['red','blue','green'];
}
function Child(){
}
//原型继承
//原型链的引用类型不会共享  不能通过子类向父类传参
Child.prototype = new Person();


//构造函数继承 原型链的引用类型不会共享  函数不能复用
function Child1(){
    Person.call(this,'me');
}

//组合继承
//使用原型链实现对原型属性和方法的继承,通过借用构造函数来实现对实例属性的继承.




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

const test1=new startPeson('tao',18,'nan');
console.log(test1)
console.log(test1.__proto__);
console.log(Object.toString(Person));