function subsets(arr) {
  // base case 
  if (!arr.length) return [[]];
  const last = arr[arr.length - 1];
  // recursive call, get the subsets for the array which is one element smaller
  const subs = subsets(arr.slice(0, arr.length - 1));
  // for each subset in the previous set, push on the element we initially removed
  // then concat this new set with the set from the recursive call 
  return subs.concat(subs.map((el) => {
    let newArr = el.slice(0);
    newArr.push(last);
    return newArr;
  }));
}
// `subsets([1,2])` => [[],[1],[2],[1,2]]
// `subsets([1,2,3])` => [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
arr1 = [1,2];
arr2 = [1,2,3];

console.log(subsets(arr1));
console.log(subsets(arr2));

function intersection(arr1, arr2) {
  let intersect = [];
  [arr1, arr2].forEach(arr => arr.sort((a, b) => a < b));

  let current = arr1[0] < arr2[0] ? arr1 : arr2;

  while (arr1.length !== 0 || arr2.length !== 0) {
    let latest = current.shift(),
      other = current === arr1 ? arr2 : arr1;


    if (latest === other[0]) {
      intersect.push(latest);
      other.shift();
    }

    current = current === arr1 ? arr2 : arr1;
  }

  return intersect;
}
