//放的永远是值
//从上往下的层序遍历
var preorderTraversal = function(root) {
    const arr=[]
    let dfs=function(node){
        if(node == null) return
        dfs(node.left);
        arr.push(node.val)
        dfs(node.right)
    }
    dfs(root);
    return arr;
};