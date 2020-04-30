function depthFirstSearch(root, targetVal) {
    let stack = [root];

    while (stack.length){
        let ele = stack.pop();

        if (ele) {
            if (ele.val === targetVal) return ele;
            stack.push(ele.right);
            stack.push(ele.left);
        }
    }
    return null;
}


module.exports = {
    depthFirstSearch
};