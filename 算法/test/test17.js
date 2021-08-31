function foo(){
    this.a = 100;
    this.b = 200;
}
    
function goo(){
    this.c = 300;
    this.d = 400;
}
    
var foo_ins=new foo(); //a b

foo_ins.e=5;
foo_ins.a=10;

goo.prototype=foo_ins;// cd(a` b e)

var goo_ins=new goo(); //cd (a` b e)


foo.prototype=goo_ins; //a b( cd (a` b e))

var foo_ins=new foo();//a b( cd (a` b e))


console.log(foo_ins,foo_ins.__proto__,foo_ins.__proto__.__proto__,foo_ins.e)

