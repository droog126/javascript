

//左右两边最大 然后往上走加1
//结果是左加右 过程中最大值

var diameterOfBinaryTree = function(root) {
    var r=0;
    let dfs=function(node){
        if(!node){return 0}
        let left=dfs(node.left);
        let right=dfs(node.right);
        r=Math.max(r,left+right)
        return Math.max(left,right)+1
    }
    dfs(root)
    return r;

};