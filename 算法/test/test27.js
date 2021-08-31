arr=[1,2,3,4,5,6,78,9];

Array.prototype._map = function(fn, thisArg) {
    const result = [];
    this.reduce((prev, curr, index, array) => {
        
      console.log(prev,curr)
      result[index] = fn.call(thisArg, array[index], index, array);
      return curr
    }, 0)
    return result;
  }

console.log(arr,'---->',arr._map((item)=>item*2))
