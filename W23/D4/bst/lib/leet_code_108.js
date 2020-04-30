// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
} 

function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    let midEle = Math.floor(nums.length / 2);
    let left = nums.slice(0, midEle);
    let right = nums.slice(midEle + 1);
    
    let root = new TreeNode(nums[midEle]);

    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);

    return root;
}

// [1,2,3,4,5]

//         3
//         /\
//        2   5
//       /   /
//      1   4        