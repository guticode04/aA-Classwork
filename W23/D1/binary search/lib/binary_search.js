function binarySearch(array, target) {
  if (array.length === 0) return false;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid + 1);

  if (target < array[mid]) {
    return binarySearch(left, target);
  } else if (target > array[mid]) {
    return binarySearch(right, target);
  } else {
    return true;
  }
}

function binarySearchIndex(array, target) {
  if (array.length === 0) return -1;

  let idx = Math.floor(array.length / 2);
  let left = array.slice(0, idx);
  let right = array.slice(idx + 1);

  if (target < array[idx]) {
    return binarySearchIndex(left, target);
  } else if (target > array[idx]) {
    let result = binarySearchIndex(right, target);
    if (result >= 0) {
      return result + idx + 1;
    } else {
      return result;
    }
  } else {
    return idx;
  }
}

module.exports = {
  binarySearch,
  binarySearchIndex,
};
