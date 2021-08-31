//call实现原理
//实现原理就是为对象 obj 添加需要调用的方法，接着调用该方法（此时 this 指向 obj），调用过后再删除该方法
//this指向的它的方法
//call的前缀是函数

Object.prototype.call1=function(...args){
    const self_obj=arguments[0];
    const rest_args=[].slice.call(arguments,1);

    self_obj.zhizhen=this;
    const r=self_obj.zhizhen(rest_args);
    delete self_obj.zhizhen;
    return r;
}

Object.prototype.apply1=function(...args){
    const self_obj=arguments[0];
    self_obj.zhizhen=this;
    const r=self_obj.zhizhen(...rest_args[1]);
    delete self_obj.zhizhen;
    return r;
}


//返回一个this.apply的函数
Object.prototype.bind1=function(...args){
    return ()=>{
        return this.apply(args[0],(args || []).slice(1));
    }
}



function call(obj,fn,...args){
    obj.self=fn;
    var r=obj.self(...args)
    console.log(r);
    return r;
}


var person = {
    name: "axuebin",
    age: 25
};
function say(job){
console.log(this.name+":"+this.age+" "+job);
}
// say.call1(person,"FE"); 

call(person,say,'hi');


function bind(obj,fn,...args){
    return ()=>{
       return fn.apply(obj,args);
    }
}