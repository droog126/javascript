var compareVersion = function(version1, version2) {
    const arr1=version1.split('.');
    const arr2=version2.split('.');
    const max_len=Math.max(arr1.length,arr2.length);
    for(var i=0;i<max_len;i++){
        var num1=Number(arr1[i]) || 0;
        var num2=Number(arr2[i]) || 0;
        if(num1>num2){
            return 1
        }
        if(num1<num2){
            return -1
        }
    }
    return 0
};