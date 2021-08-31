for (var i = 3; i > 0; i--) {
    setTimeout(() => console.log(i), 1);
}
var i=10;
// let 3 2 1
// var 0 0 0

for (let i = 3; i > 0; i--) {
    //每次循环都是不同的作用域
    setTimeout(function(){
        console.log(i);
    }, 1);
}


var value = 20;
(function () {
  console.log(name);		//undefined var name已声明,未赋值
  console.log(value);		//undefined
  var name = 'local value';
  var value = 21;         //不能提升
})();


for (var i = 0; i < 3; i++) {
    setTimeout((function(i) {
        return function() {
            console.log(i);
        };
    })(i), 0);  //改为立即执行的函数
    console.log(i);
}