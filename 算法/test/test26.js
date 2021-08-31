//https://segmentfault.com/a/1190000019754823
//https://segmentfault.com/a/1190000019754823

if (!a) {
    var  a = 2;
}
var a = 1;

function foo() {
    console.log(a)
    if (!a) {
        var  a = 2;
    }
    console.log(a)
};

foo();



//js运行未声明变量赋值
//在函数内 函数名是大于局部变量的
(function foo(){
    foo=100;
    console.log(foo);
}())