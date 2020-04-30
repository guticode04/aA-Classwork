// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

// preorder = [3, 9, 20, 15, 7]; self left right
// inorder = [9, 3, 15, 20, 7]; left self right

//   3
//  / \
// 9  20
//   /  \
//  15   7

// base case if both array empty
// root has to be 3
// whatever value gets passed in to TreeNode ends up being the root
// root = new TreeNode(preorder[0])
//iterate through
//get indexOf (value that just turned into a node)
//get the left and right of that node
// how can we breakdown the array for ever recursive call??

function buildTree(preorder, inorder) {
  if(!preorder.length && !inorder.length) return null;
  let root = new TreeNode(preorder[0]);
  if (inorder[0] !== preorder[0]){
   root.left = new TreeNode(inorder[0])
  }
  if (preorder[2] =)

}
