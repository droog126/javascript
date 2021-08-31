//就是中序遍历深度遍历 然后 按奇数对调
var zigzagLevelOrder = function(root) {
    if(root==null){
        return []
    }
    const r=[];
    let dfs=function(node,depth){
        if(!Array.isArray(r[depth])){
              r[depth]=[];
        }
        r[depth].push(node.val);
        if(node.left){dfs(node.left,depth+1);}
        if(node.right){dfs(node.right,depth+1);}
        
    }

    dfs(root,0);
    r.forEach((item, index) => {
      if (index & 1) {
        r[index] = item.reverse()
      }
    })
    return r;
};