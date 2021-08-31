//用来去重
console.log(new Set([5,1,1,1,1,45,48,7]))
function unique(arr) {
    return arr.filter(function(item, index, arr) {
      //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
      return arr.indexOf(item, 0) === index;
    });
}