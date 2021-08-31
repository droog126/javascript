//dfs需要返回节点
var mirrorTree = function(root) {
    let dfs=function(node){
        if(!node){return null}
        const left=dfs(node.left);
        const right=dfs(node.right);
        node.left=right;
        node.right=left;
        return node;
    }
    dfs(root)
    return root
};