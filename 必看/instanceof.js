function newInstanceOf(left_obj,right_obj){
    if(typeof left_obj!=='object' || right_obj==null){
        return false;
    }
    left_obj=left_obj.__proto__;
    right_obj=right_obj.prototype;
    while(true){
        if(left_obj===null){return false}
        if(left_obj===right_obj){return true}
        left_obj=left_obj.__proto__
    }
}

const a = [];
const b = {};

function Foo () {}

var c = new Foo()
function Child () {}
function Father() {}
Child.prototype = new Father()
var d = new Child()
while(true){
    if(d==null){break}
    console.log(d);
    d=d.__proto__;
}



console.log(newInstanceOf(a, Array)) // true
console.log(newInstanceOf(b, Object)) // true
console.log(newInstanceOf(b, Array)) // false
console.log(newInstanceOf(a, Object)) // true
console.log(newInstanceOf(c, Foo)) // true
console.log(newInstanceOf(d, Child)) // true
console.log(newInstanceOf(d, Father)) // true
console.log(newInstanceOf(123, Object)) // false 
console.log(123 instanceof Object) // false

while(true){
    if(d==null){break}
    console.log(d);
    d=d.__proto__;
}