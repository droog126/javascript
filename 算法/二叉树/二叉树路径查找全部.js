/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    if(!root){return []}
   const paths=[]
   let dfs=function(node,sum,path){
       sum+=node.val;
       path=[...path,node.val]
       if(!node.left && !node.right && sum==targetSum){
           paths.push(path);
       }
       if(node.left){
            dfs(node.left,sum,path);
       }
       if(node.right){
            dfs(node.right,sum,path);
       }
        
   }
   dfs(root,0,[])

   return paths;
};

