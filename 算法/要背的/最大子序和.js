//i从1开始
var maxSubArray = function(nums) {
    let num=nums[0];
    let max=nums[0];
    for(let i=1;i<nums.length;i++){
        
        if(num<=0){
            num=nums[i];
        }else{
            num+=nums[i];
        }
        
        max=Math.max(num,max);
    }
    return max;
};