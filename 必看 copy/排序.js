///冒泡排序
var arr=[1,54,8,7,54,654,4,6]
function MySort( arr ) {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]>arr[j]){
                let temp=arr[i];
                 arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

//快排
// 选一个基准左右排序
function quicksort(arr){
    if(arr.length<=1){return arr;}
    let index=Math.floor(arr.length/2);
    let mid=arr.splice(index,1)[0];
    let left=[];
    let right=[];
    for(let item of arr){
        if(item < mid){
           left.push(item); 
        }else{
            right.push(item);
        }
    } 
    return quicksort(left).concat([mid],quicksort(right))
}
var arr=[54,545,54,654,65654,56,4,5,4,4,12,12,1]
var r=quickSort(arr)
console.log(r)


//array.sort 原理是双轴快排
//用两根轴分成三段进行递归排序
//https://juejin.cn/post/6948576107163549732#heading-7