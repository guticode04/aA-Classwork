function numRegions(graph) {
  let count = 0;
  let visited = new Set();

  for (let node in graph) {
    if (visited.has(node)) continue;
    regionSearch(node, graph, visited);
    count++;
  }
  return count;
}

function regionSearch(node, graph, visited) {
  if (visited.has(node)) return;
  visited.add(node);
  graph[node].forEach((ele) => {
    regionSearch(ele, graph, visited);
  });
}

module.exports = {
  numRegions,
};

// let graph1 = {
//     'a': ['b'],
//     'b': ['a'],
//     'c': ['d'],
//     'd': ['e', 'c'],
//     'e': ['d'],
// };

// a -> b
// b -> a

// c -> d
// d -> e && d -> c
// e -> d

// let count = 0;
// let visited = new Set();

// for (let node in graph) {
//   if (visited.has(node)) continue;
//   visited.add(node);
//   graph[node].forEach((node) => {
//     visited.add(node);
//   });
//   count++;
// }

// return count;
