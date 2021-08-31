//arr.slice
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1,3);
console.log(citrus);


//arr.splice();
fruits.splice(2,1);
console.log(fruits);
fruits.splice(2,1,"tao");
console.log(fruits);

//数组合并 arr.concat()
const new_arr=fruits.concat([1,2]);
console.log(new_arr);

//深拷贝
let r=[]
r.push(new_arr.concat())

//Array.from()把set变成数组 参数二是map
var demo=new Set([1,2,1,3]);
console.log(demo);
console.log(Array.from(demo));


//shift()  移除数组的第一项，返回移除项

//unshift()  在数组的第一项前面添加一个或多个元素，返回数组的长度

//arr.reverse() 不改变元数组
//arr.reduce();
//str.indexOf();
//arr.includes();
var demo=[1,2,12,4,48,74,456,4,87,1,1,11,1,1]
const result=demo.reduce((res,one,index,source)=>{
    if(!res.includes(one)){
        res.push(one);
    }
    return res;
},[])
console.log(result);

/*
map()	通过指定函数处理数组的每个元素，并返回处理后的数组。会改变

*/
arr=[1,2,3,4,5,6,78,9];
console.log(arr.map((item)=>item*2))

/*
filter()	检测数值元素，并返回符合条件所有元素的数组。
hege.concat(stale,kai);
*/

/*
只有splice会改变原值

字符串野又slice
*/