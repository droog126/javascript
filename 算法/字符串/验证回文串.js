var isPalindrome = function(s) {
    
    s=s.replace(/\W|_/g,'').toLocaleLowerCase();
    //\W：匹配非 字母、数字、下划线。等价于 '[^A-Za-z0-9_]'
    // console.log(s)
    let left=0;
    let right=s.length-1;
    while(left<right){
        if(s[right]!=s[left]){return false}
        left++;
        right--;
    }
    return true;
};