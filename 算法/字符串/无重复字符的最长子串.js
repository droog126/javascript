/**
 * @param {string} 
 * @return {number}
 */
//截取要 放后截取 而且截取index要加1
//455 48 199 10 155
//再看下反转指针 和 k
 var lengthOfLongestSubstring = function(s) {
  
    let max=0;
    let str_arr=[];
    for(let char of s){
        let index=str_arr.indexOf(char);
        if(index==-1){
            str_arr.push(char);
        }else{
            str_arr.push(char);
            str_arr=str_arr.slice(index+1);
        }
        max=Math.max(str_arr.length,max);
    }
    return max;
};