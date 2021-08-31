//使用reduce模拟map
// Array.prototype._map = function(fn, thisArg) {
//     const result = [];
//     this.reduce((prev, curr, index, array) => {
//       result[index] = fn.call(thisArg, array[index], index, array);
//     }, 0)
//     return result;
// }
   
// 使用reduce将数组的每个元素+索引值


Array.prototype._map=function(func,thisArr){
  return  this.reduce((always_arr,cur_val,cur_key,source_arr)=>{
    let cur_result=func.call(thisArr,cur_val,cur_key);
    always_arr.push(cur_result);
    return always_arr;
  },[])
}

const arr = [1,2,3,4,5]
const arr2 = [6,7,8]

//map相当于call
const _mapArr = arr._map(function(v, i){
    return v+i+this.length;
}, arr2)

console.log(_mapArr);   
  

// redecue((add,val,index,source)=>{


// },start)

/*
map((val,index)=>{

},source)
*/

Array.prototype.__map=function(func,source){
  return this.reduce((add,val,index)=>{
    add.push(func.call(source,val,index)) 
    return add;
  },[])
}
const __mapArr = arr.__map(function(v, i){
  return v+i+this.length;
}, arr2)

console.log(__mapArr);   

//splice裁剪 返回要被裁剪的数组
