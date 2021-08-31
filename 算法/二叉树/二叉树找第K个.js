var kthSmallest = function(root, k) {
    let res=null;
    let dfs=function(node){    
        if(node.left)dfs(node.left);
        k--;
        if (k==0){
            res=node.val;
            return
        }        
        if(node.right)dfs(node.right);
       
    }
    dfs(root)
    return res; 
};