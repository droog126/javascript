//获得结果方程
//我不知道10块钱需要多少硬币 但我知道 [10-8]+1
var numSquares = function(n) {
    const dp = new Array(n+1).fill(0);

    for (let i = 1; i <= n; i++) {
        dp[i]=i;
        for(let j=1;i-j*j>=0;j++){
            dp[i]=Math.min(dp[i],dp[i-j*j]+1);
        }
    }

    return dp[n];
};

