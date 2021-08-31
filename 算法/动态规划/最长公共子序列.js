//创建n+1 m+1的矩阵 从 1到 n赋值 是等于就对角+1  否则就是左右最大   
//原理就是求每个 0-i 到 0-j 最长公共子串的情况
var longestCommonSubsequence = function(text1, text2) {
   let n=text1.length;
   let m=text2.length;
   let arr=Array.from(new Array(n+1),()=>new Array(m+1).fill(0));
   for(let i=1;i<=n;i++){
      for(let j=1;j<=m;j++){
         if(text1[i-1]==text2[j-1]){
            arr[i][j]=arr[i-1][j-1]+1;
         }else{
            arr[i][j]=Math.max(arr[i-1][j],arr[i][j-1]);
         }
      }
   }
   return arr[n][m];
};
 