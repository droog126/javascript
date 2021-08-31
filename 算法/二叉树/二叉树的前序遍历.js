var preorderTraversal = function(root) {
    const arr=[]
    let dfs=function(node){
        if(node == null) return
        arr.push(node.val)
        dfs(node.left);
        dfs(node.right)
    }
    dfs(root);
    return arr;
};