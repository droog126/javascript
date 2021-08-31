var rob = function(nums) {
    let arr=new Array(nums.length+1);
    
    arr[0]=0;
    arr[1]=nums[0];
    let len=arr.length
    for(let i=2;i<len;i++){
        arr[i]=Math.max(arr[i-1],nums[i-1]+arr[i-2])
    }
    //console.log(arr);
    return arr[len-1];
};