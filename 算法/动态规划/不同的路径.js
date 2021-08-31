/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//初始化1 
//左右合
 var uniquePaths = function(m, n) {
    let arr=Array.from(new Array(m),()=>new Array(n).fill(0))
    
    for(let i=0;i<m;i++){
        arr[i][0]=1;
    }
    for(let j=0;j<n;j++){
        arr[0][j]=1;
    }

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            arr[i][j]=arr[i-1][j]+arr[i][j-1];
        }
    }

    return arr[m-1][n-1];
};