const arr = [1, [2, 3], [4, [5, [6, 7]]], [8]];
const getArrayMaxDepth=(arr,depth)=>{
    let max_depth=depth;
    for(let item of arr){
        if(Array.isArray(item)){
            max_depth=Math.max(getArrayMaxDepth(item,depth+1),max_depth);
        }
    }
    return max_depth;
}

var r = getArrayMaxDepth(arr, 1);
console.log(r);
