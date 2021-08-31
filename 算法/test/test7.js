const foo = (function(){
    let counter = 1;
    function increase(){
        console.log(counter)
        return counter++;
    }
    increase.reset = function() {
        counter = 1;
    }
    return increase;
})()

a=foo();
b=foo();

//串转千分位

//立即执行函数 加闭包  并且把闭包函数的对象赋值


//闭包的作用 立即执行匿名函数