//每一个格子的意义：组成目前金额所需的做少硬币个数
//递推公式：dp[i] = min(dp[i], dp[i - coin] + 1)dp[i]=min(dp[i],dp[i−coin]+1)，状态压缩的完全背包问题的经典递推公式
//0 Infinity  Infinity
//arr[index]=Math.min(arr[index]+1,arr[i])

var coinChange = function(coins, amount) {
    let db=new Array(amount+1);
    db[0]=0;
    for(let i=1;i<=amount;i++){
        db[i]=Infinity;
        for(let coin of coins){
            if((i-coin)>=0){
                db[i]=Math.min(db[i],db[i-coin]+1);
            }
        }
    }
    return db[amount]==Infinity ? -1 : db[amount]
}
  

