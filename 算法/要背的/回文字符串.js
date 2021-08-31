var str=readline();
console.log(huiwen(str));
function huiwen(s){
    let res = 0; //记录结果
    for(let i=0;i<s.length;i++){
        let str = ''; //正向组合字符串
        let restr = ''; //反向组合字符串
        for(let j=i;j<s.length;j++){
            str += s[j];
            restr = s[j] + restr;
            if(str == restr && str.length!=1) res++; 
        }
    }
    return res
}