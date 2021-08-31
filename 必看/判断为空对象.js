
Object.keys(obj).length === 0;


//for in 会遍历原型链上的属性
//加上 if obj.hasOwnProperty(key);

//用Object.keys()


//正确的遍历
Object.keys(person).forEach(function (v,index) {
    console.log("person ", e, ": ", person[e]);
});