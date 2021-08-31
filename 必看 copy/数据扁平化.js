var test=[1, [2, 3, [4, 5]]];

function func(arrs){
    const r=[];
    let test=function(arr){
        //如果他不是我们就转化为我们想要的格式
        for(let item of arr){
            if(Array.isArray(item)){
                test(item)
            }else{
                r.push(item);
            }
        }

    }
    test(arrs)
    return r;
}

console.log(func(test))