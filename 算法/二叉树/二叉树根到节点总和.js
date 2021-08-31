var sumNumbers = function(root) {
    if(!root){return 0}
    let sum=0;
    let dfs=function(node,num){
        num=num*10+node.val;
        if (!node.left && !node.right) {sum += num;}
        if(node.left) dfs(node.left,num);
        if(node.right)dfs(node.right,num);
    }
    dfs(root,0);
    return sum;
};