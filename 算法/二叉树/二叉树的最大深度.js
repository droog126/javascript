var maxDepth = function(root) {   
    if(!root) return 0;

    let res=0;
    //有节点遍历下去并且参数加一
    let dfs=(node,num)=>{
      res=Math.max(res,num);
      if(node.left) dfs(node.left,num+1);
      if(node.right) dfs(node.right,num+1);
    }

    dfs(root,1)
    return res;
};