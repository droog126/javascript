
function foo(){
    this.a = 100;
    this.b = 200;
}

function goo(){
    this.c = 300;
    this.d = 400;
}

var seed = new foo();  //a b

foo.prototype.fuss2 = function(fn) {
    
    //fn  c d
    fn.prototype = seed; //goo c d(a b (fuss2))
    return new fn; //goo_ins c d(a b (fuss2))
}

var a = seed.fuss2(goo);
//a    c d(a b (fuss2))
//foo ab(fuss2)
//seed ab(fuss2)

if ( "fuss2" in a ) {
    var b = a.fuss2(foo);// a b(fuss2)
    
}

console.log(Object.getOwnPropertyNames(foo.prototype.__proto__))
console.log(a,a.__proto__,a.__proto__.__proto__)
console.log(a.hasOwnProperty('a'))
console.log(Object.getOwnPropertyNames(a))
console.log(Object.prototype.hasOwnProperty.call(a, "a"));//true
console.log("b" in a);//true
console.log("fuss2" in a);//true
console.log("c" in b);//flase