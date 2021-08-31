
function foo(){
this.a = 100;
this.b = 200;
}

function goo(){
    this.c = 300;
    this.d = 400;
}

var seed = new foo();  // foo: a b



foo.prototype.fuss = function(fn) {
    //fn  c d
    console.log(this) // a b(fuss) 
    fn.prototype = seed;//c d(a b (fuss) ) 
    seed = new fn(); //c d (a b (fuss))
    return this // a b (fuss)
} //foo : a b(fuss )

var a = seed.fuss(goo); 


console.log(a.c);  // undefined
console.log(a === seed ); // false
console.log(seed.a); // 100