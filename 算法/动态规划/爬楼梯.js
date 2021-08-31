var climbStairs = function(n) {
    var arr=new Array(n+2).fill(0);
    arr[0]=1;
    arr[1]=1;
    for(let i=2;i<=n+1;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr[n]
};