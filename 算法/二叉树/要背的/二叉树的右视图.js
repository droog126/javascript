//把结果作参数进行传递  长度等于深度就放进去 先序遍历 数组长度等于深度就放进去
var rightSideView = function(root) {
    if(!root) return []
    let r = []
    let dfs = function(node, depth) {
        if(!node){return null}
        if(depth==r.length){
            r[depth]=node.val;
        }
        dfs(node.right, depth + 1) 
        dfs(node.left, depth + 1)

    }

    dfs(root, 0)
    return r
};