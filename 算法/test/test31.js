function Father(name){
    this.name = name;
    this.colors = ["red","blue","green"];
} //name colors
function Son(name,age){
    Father.call(this,name);//继承实例属性，第一次调用Father()
    this.age = age;
}// name colors age

//
Son.prototype=new Father();

//
var one = new Son('tao',18);
console.log(one instanceof Son)
console.log(one instanceof Father)