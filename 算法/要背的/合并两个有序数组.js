/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//如果前面的的大于3 就1 2 3 0 0 3
 var merge = (nums1, m, nums2, n) => {
    let i = nums1.length - 1
    m--
    n--
    while (n >= 0) {
        if (nums1[m]>nums2[n]){
            nums1[i]=nums1[m];
              i--;
              m--;
        }else{
            nums1[i]=nums2[n];
            i--;
            n--;
        }
    }
}