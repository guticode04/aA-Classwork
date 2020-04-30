function treeHeight(root) {
  if (!root) return -1;


  const right = treeHeight(root.right) + 1
  const left = treeHeight(root.left) + 1

//   console.log("right: ", right);
//   console.log("left: ", left);
  
if (right && left) {
    return Math.max(right, left);
} else if (right) { 
    return right
} else {
      return left
  }
}


module.exports = {
    treeHeight
};