class Person {
    constructor (name) {
         this.name = name;
    }
    greet () {
         console.log(`Hi, my name is ${this.name}`);
    }
    greetDelay (time) {
         setTimeout(() => {
              console.log(`Hi, my name is ${this.name}`);
         }, time);
    }
}

var Persons=(function (){
    function Persons (name){
        this.name=name;
    }
    Persons.prototype.greet=function(){
        console.log('Hi, my name is ',this.name);
    }
    Persons.prototype.greetDelay=function(){
        var _this=this;
        setTimeout(function(){
            console.log('Hi, my name is ',_this.name);
        },time)
    }
    return Persons;
})()

console.log(Person)

//class 等于立即执行函数 返回闭包

var people=new Persons()
console.log(people)   

for (var i = 1; i <= 5; i++) {
	(function (i) {
		setTimeout(function timer() {
			console.log(i);
		}, i * 1000)
	})(i)
}