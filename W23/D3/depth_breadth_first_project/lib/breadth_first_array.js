function breadthFirstArray(root) {
    let values = [];

    let queue = [ root ];
    while(queue.length) {
        let ele = queue.shift();
        if(ele) {
            values.push(ele.val);
            queue.push(ele.left);
            queue.push(ele.right);
        }

    }

    return values;
}

module.exports = {
    breadthFirstArray
};