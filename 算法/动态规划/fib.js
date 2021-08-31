var fib = function(n) {
    var arr=new Array(n+2).fill(0);
    arr[0]=0;
    arr[1]=1;
    for(let i=2;i<=n+1;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr[n]
};
var rob = function(nums) {
    let arr=new Array(nums.length+1);
    
    arr[0]=0;
    arr[1]=nums[0];
    for(let i=2;i<arr.length;i++){
        arr[i]=Math.max(arr[i-1],nums[i-1]+arr[i-2])
    }
    //console.log(arr);
    return arr[len-1];
};