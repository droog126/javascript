var isBalanced = function(root) {
    let dfs=function(node){
        if(!node){return 0}
        let left=dfs(node.left);
        let right=dfs(node.right);
        if(left<0 || right<0){return -1}
        if(Math.abs(left-right)>1){
            return -1
        }else{
            return Math.max(left,right)+1
        }
    }
    let r=dfs(root);
    return r>=0 ? true : false
};