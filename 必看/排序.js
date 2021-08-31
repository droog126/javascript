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
//最坏为n的平方  空间logn                                                                      
//选基准分开排
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

//归并排序 分开 到最小数组 然后排序 合起来
//都为nlogn 最好最坏 空间 n
function merge(left, right) {
  let result = []
  let i = 0, j = 0
  while(i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }
  if (i < left.length) {
    result.push(...left.slice(i))
  } else {
    result.push(...right.slice(j))
  }
  return result
}

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  let m = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, m))
  let right = mergeSort(array.slice(m))
  return merge(left, right)
} 



function quickSort(arr, targetIndex, start) {
    if (arr.length <= 1) return arr[0];
    let left = [];
    let right = [];
    const mid = Math.floor(arr.length / 2);
    const midNum = arr.splice(mid, 1)[0];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > midNum) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
  
    if (left.length + start === targetIndex) {
      return midNum;
    } else if (left.length + start > targetIndex) {
      return quickSort(left, targetIndex, start);
    } else {
      return quickSort(right, targetIndex, left.length + start + 1);
    }
  }
  
  var findKthLargest = function(nums, k) {
    const num = quickSort(nums, nums.length - k, 0);
  
    return num;
  };
