
 var maxProfit = function(prices) {
    //一直找到最低  然后 当前价格减最低价格 
    //最低价格等于 当前价格比最低价格
    //最多 当前价格减最低价格
    let max=0;
    let minprice=prices[0];
    for(let i=1;i<prices.length;i++){
        minprice=Math.min(minprice,prices[i]);
        max=Math.max(max,prices[i]-minprice);
    }
    return max;

};