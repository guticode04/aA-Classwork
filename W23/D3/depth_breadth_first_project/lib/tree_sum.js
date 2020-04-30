function treeSum(root) {
    let sum = 0;
    let queue = [ root ];

    while(queue.length) {
        let ele = queue.shift();
        if(ele) {
            sum += ele.val;
            queue.push(ele.left);
            queue.push(ele.right);
        }
    }

    return sum;
}

function breadthFirstArray(root) {
  let values = [];

  let queue = [root];
  while (queue.length) {
    let ele = queue.shift();
    if (ele) {
      values.push(ele.val);
      queue.push(ele.left);
      queue.push(ele.right);
    }
  }

  return values;
}

module.exports = {
    treeSum
};