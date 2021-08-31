var people = {
    name: "Modeng",
    age: 18
}

Object.defineProperty(people,'age',{
    get:function(){
        return age;
    },
    set:function(nValue){
        age=nValue;
    },
    value : "original",
    writable : false, 
    enumerable : true,
    configurable : true
})
people.age = 20;
/*
数据劫持
收集依赖
派发更新
*/
