/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//没得说就是硬背  有逻辑顺序
//--------
//--------------
 var subarraySum = function(nums, k) {
    let sum=0;
    let count=0;
    let mp=new Map();
    mp.set(0,1);
    for(let num of nums){
        sum+=num;
        if(mp.has(sum-k)){
            count+=mp.get(sum-k);
        }

        if(mp.has(sum)){
            mp.set(sum,mp.get(sum)+1)
        }else{
            mp.set(sum,1);
        }

        
    }
    return count;
};