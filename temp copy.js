const arr = [
    [0,0,1,0,1,1,0,1], 
    [0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,1], 
    [0,1,0,0,0,0,0,0], 
    [0,0,1,0,0,0,0,0], 
    [0,0,0,1,0,0,0,0], 
    [0,0,0,0,1,0,0,0], 
    [0,0,0,0,0,1,0,0]
];
// 写出一个函数，检查一个8*8的由0和1数字
// 组成的二维数组中：是否存在同一行或者同一列有超过两个数字1，如果存在则方法返回true，
// 如果8行8列都不存在，返回false，比如例子中第一行有4个1，返回true。 
const arr2=[
    [1,0,0,0],
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1],
]

function has_other(arr,cur_i,cur_j,height,width){
    let flag=false;
    for(let i=cur_i+1;i<height;i++){
        flag=arr[i][cur_j];
        
    }
    for(let j=cur_j+1;j<width;j++){
        flag=arr[i][cur_j];
    }
  
    return flag;
}

function test(arr){
    if (!Array.isArray(arr)){return false}
    let height = arr.length;
    let width = arr[0].length;
    let flag = false;
    
    for(let i = 0;i<height;i++){
        for(let j = 0;j<width;j++){
            let item = arr[i][j];
            if (item){
                let flag=has_other(arr,i,j,height,width);
                if(flag){
                    return flag
                }
            }
        }
    }
    return flag
}
