
var length = 10;
function fn() {
    console.log(this);
    return this.length+1;
}
var obj = {
    length: 5,
    test1: function() {
        return fn();
    }
};
obj.test2=fn;
//下面代码输出是什么
// console.log(obj.test1())
// //windows 11

// console.log(fn()===obj.test2())
//windosw obj false
//只要不是箭头函数 只要没有前缀调用 都是指向windows
{
    fn()
    let obj1={
        test:function(){
            fn()
            return fn()
        },
        test1:fn
    }
    obj1.test();
    obj1.test1();
}