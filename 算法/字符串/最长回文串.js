var longestPalindrome = function(s) {
    if(s.length<2){return s}
    let r='';
    for(let i=0;i<s.length;i++){
        temp(i,i);
        temp(i,i+1)
    }
    function temp(i,j){
        while(i>=0 && j<s.length && s[i]==s[j]){
            i--;
            j++;
        }
        i++;j--;
        if((j-i+1)>r.length){
            r=s.slice(i,j+1);
     
        }
    }
    return r;
};