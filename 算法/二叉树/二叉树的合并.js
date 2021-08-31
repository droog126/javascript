//如果一端没有 则不是相加 而是移接

//其中有一的表示 ! || !
//tree1.left=dfs(tree1.left,tree2.left);
//return tree1
var mergeTrees = function(root1, root2) {
    
    let dfs=function(tree1,tree2){
        if(!tree1 || !tree2){
            return tree1 || tree2
        }
        tree1.val+=tree2.val;
        tree1.left=dfs(tree1.left,tree2.left);
        tree1.right=dfs(tree1.left,tree2.left);
        return tree1
    }
    return dfs(root1,root2)
};