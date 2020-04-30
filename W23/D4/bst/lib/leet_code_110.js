// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
  if(!root) return true;
  let diff = Math.abs(checkHeight(root.left) - checkHeight(root.right));
  let left = isBalanced(root.left);
  let right = isBalanced(root.right);
  if (diff <= 1 && left && right) {
    return true;
  } else { 
    return false;
  }
}

function checkHeight(node) {
  if(!node) return -1;
  return 1 + Math.max(checkHeight(node.left), checkHeight(node.right));
}