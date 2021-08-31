/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function (n, k) {
    if (n < 0 || k < 0 || k > n) {
        return []
    }
    const ans = []
    function backTracing(path, start) {
        if (path.length === k) {

            //关键句 
            ans.push([...path])
            return
        }
        //越长 
        for (let i = start; i <= n +path.length + 1 - k; i++) {
            path.push(i)
            backTracing(path, i + 1)
            path.pop()
        }
    }
    backTracing([], 1)
    return ans
};