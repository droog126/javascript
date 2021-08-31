var hasPathSum = function(root, targetSum) {
    if (!root){return false}
    let r=false;
    let dfs=function(node,num){
        let left=num-node.val;
        if(node.left){dfs(node.left,left)}
        if(node.right){dfs(node.right,left)}
        if(node.left==null && node.right==null){
            if (left==0){
                r=true;
            }
        }
        
    }
    dfs(root,targetSum)
    return r;
};