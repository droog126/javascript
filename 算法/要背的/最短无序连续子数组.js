//和排序后的数组比较
var findUnsortedSubarray = function(nums) {
    let narr=[...nums].sort((a,b)=>a-b);
    
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=narr[i]){
            break;
        }
    }
    for(var j=nums.length-1;j>=0;j--){
        if(nums[j]!=narr[j]){
            break;
        }
    }
    console.log(i,j,narr)
    if(j<=i){return 0}
    else{return j-i+1}
};

//https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/