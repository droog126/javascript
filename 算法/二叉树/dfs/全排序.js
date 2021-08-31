//弄一个set 你需要遍历到后面的数 所以你先赋值 然后 dfs 然后删除赋值
//推出条件是当前数组的大小
const permute = (nums) => {
    const r=[];
    let dfs=function(arr,set){
        if(arr.length==nums.length){
              r.push(arr.concat())
        }
        for(let num of nums){
            if(!set.has(num)){   
              arr.push(num);
              set.add(num);
              dfs(arr,set);
              arr.pop();
              set.delete(num);
            }
         
        }
    }
    dfs([],new Set())

    return r;
};
  