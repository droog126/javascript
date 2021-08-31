function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
};
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {
    console.log(5);
};

Foo.getName(); 
getName(); 
Foo().getName();  //!!!!   普通调用的this就是windows
getName();  //!!!!
new Foo.getName();
new Foo().getName(); //!!!!  new Foo()   => obj.getName()
new new Foo().getName(); 
