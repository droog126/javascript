//工厂模式
// 就是让一个多个构造函数 打包在一个函数里面
// 你要调用哪个你就传递它不同的值
// 好处是不管你想要创建什么东西，只要调用那个工厂函数就行了，加上对应的id值

//单例模式
// 就是让一个对象去管理所有一些东西，而且只是由他来管理，
// 具体代码逻辑就是
// 要用这个对象就创建， 看下是否有这个对象有就返回，没有就创建一个
//把构造函数放在闭包函数里面 闭包函数有个获取单例的方法

//观察者模式

//event bus 就是单例模式加观察者模式

//函数调用自己 然后在函数里面弄构造类 
//直接调用

// const signleton=(
// ()=>{
//     function real_class(){
//         this.name='tao';
//     }
//     let ins;
//     return {
//         get_ins:function(){
//             if(!ins){
//                 ins=new real_class();
//             }
//             return ins;
//         }
//     }
// }
// )();
// console.log(signleton.get_ins());

function get_single() {
    var data = null;
    return function (arg) {
        if (!data) {
            data = arg;
        }
        return data;
    }
}
