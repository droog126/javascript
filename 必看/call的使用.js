/*
call是在这个对象的基础上调用函数
每个函数对象都有call apply bind方法
console.log(Object.getOwnPropertyNames(Function.prototype))

*/
var person = {
  name: "axuebin",
  age: 25
};
function say(job){
  console.log(this.name+":"+this.age+" "+job);
}
say.call(person,"FE"); // axuebin:25 FE
say.apply(person,["FE"]); // axuebin:25 FE
var sayPerson = say.bind(person,"FE");
sayPerson(); // axuebin:25 FE

