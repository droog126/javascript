var buildTree = function(prv, mid) {
    
    //弹出头部 在中序找索引 创建节点 节点左叶赋值 节点右叶赋值
    //让所有前序遍历当头 中序遍历当叶子
    // 0 - index       index+1 - 
    function dfs(mid) {
        if (!mid.length) return null
        let top = prv.shift()
        let p = mid.indexOf(top)

        let node = new TreeNode(top)
        node.left = dfs(mid.slice(0, p))
        node.right = dfs(mid.slice(p+1))
        return node
    }
    return dfs(mid) 
};