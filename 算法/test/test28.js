var a = [];
var b = {};

function Foo () {}

var c = new Foo()
function Child () {}
function Father() {}
Child.prototype = new Father()
var d = new Child()
while(true){
    if(d==null){break}
    console.log(d);
    if(typeof d == 'function'){
        d=d.prototype;
    }else{
        d=d.__proto__
    }
 
}

 