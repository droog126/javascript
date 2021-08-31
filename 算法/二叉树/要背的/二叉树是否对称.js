//(left.val==right.val && dfs(left.left,right.right) && dfs(left.right,right.left))  
var isSymmetric = function(root) {
    if (root === null) return true;
    let dfs=function(left,right){
        if(left === null && right ===null){
            return true;
        }
        if(left === null || right===null){
            return false;
        }
        if(left.val==right.val && dfs(left.left,right.right) && dfs(left.right,right.left))        {
            return true;
        }else{
            return false;
        }
        
    }
    return dfs(root.left, root.right);
};

