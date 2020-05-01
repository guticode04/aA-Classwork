function maxValue(node, visited = new Set()) {
  if (visited.has(node)) return 0;
  visited.add(node);

  let maxVal = node.neighbors;
  // return the value of neighbor node
  const maxArr = maxVal.map((el) => maxValue(el, visited));

  return Math.max(node.val, ...maxArr);
}

module.exports = {
  maxValue,
};
