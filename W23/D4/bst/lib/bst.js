class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val, root = this.root) {
        let node = new TreeNode(val);
        if(!root) {
            this.root = node;
            return;
        }

        if(val < root.val) {
            if(!root.left) {
                root.left = node;
            } else {
                this.insert(val, root.left);
            }
        } else {
            if(!root.right) {
                root.right = node;
            } else {
                this.insert(val, root.right);
            }
        }
   }

   searchRecur(val, root = this.root) {
        if (!root) return false;

        if (val < root.val) {
            return this.searchRecur(val, root.left);
        } else if (val > root.val) {
            return this.searchRecur(val, root.right);
        } else {
            return true;
        }
   }
   
   
   searchIter(val) {
       let node = this.root;

       while (node) {
           if(val < node.val) {
               node = node.left;
           } else if(val > node.val) {
               node = node.right;
           } else {
               return true;
           }
       }
       return false;
   }
}

module.exports = {
    TreeNode,
    BST
};