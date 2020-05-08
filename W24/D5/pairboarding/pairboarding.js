// permutations([1,2]) => [[1,2], [2,1]]
// permutations([1,2,3]) => [[1,2,3], [1,3,2], [2,1,3], 
//                                [2,3,1], [3,1,2], [3,2,1]]

function permutations(array) {
  if (array.length <= 1) {
    return [array];
  }
  const result = [];
  const first = array.pop();
  const prevPerms = permutations(array);

  prevPerms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      let nextPerm = perm.slice(0, i).concat([first]).concat(perm.slice(i));
      result.push(nextPerm);
    }
  });

  return result;
}

arr1 = [1,2];
arr2 = [1,2,3];

console.log(permutations(arr1));
console.log(permutations(arr1));