//从上到下 从左到右  广度优先搜索 BFS    后序遍历DFS
/*
常见的 DFS ： 先序遍历、中序遍历、后序遍历；
后序遍历  从下往上 从左往右

常见的 BFS ： 层序遍历（即按层遍历）。
*/
/*
二叉搜索树的特点是左子树的值<根节点<右子树的值
中序就是 左 根 右 
而后续遍历的顺序是：
左子节点→右子节点→根节点；
*/

var levelOrder = function(root) {
    if (!root) return []

    const queue = [root], res = []
    while (queue.length) {
        const node = queue.shift()
        res.push(node.val)
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }

    return res
};
