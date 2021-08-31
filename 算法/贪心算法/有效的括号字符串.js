/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function(s) {
    let low = 0;
    let high = 0;
    
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            low++;
            high++;
        }else if(s[i]==')'){
            //贪心缩小区间
            if (low > 0) --low;
            if (high > 0) {
                --high;
            } else {
                return false;
            }

        }else{
            //贪心缩小区间
            if(low>0){
                low--;
            }
            high++;
        }
    }
    return low<=0&&0<=high;
};

//也可以根据index来
//https://leetcode-cn.com/problems/valid-parenthesis-string/solution/you-xiao-de-gua-hao-zi-fu-chuan-xian-jian-ce-you-g/