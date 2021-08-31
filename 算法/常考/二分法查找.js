var arr = [1, 4, 5, 6, 8, 555, 4564, 46544545];
function search(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] == target) {
            return mid;
        } else if(arr[mid]>target){
            right = mid - 1;
        } else {
            left = mid + 1;
            
        }
    }
    return -1;
}

console.log(search(arr, 555));