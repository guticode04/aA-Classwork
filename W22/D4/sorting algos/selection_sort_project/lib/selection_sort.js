function swap(arr, idx1, idx2) {
  let tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
  return arr;
}

function selectionSort(arr) {
  let minIdx = 0,
    lastInserted = 0;

  for (let i = minIdx; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    swap(arr, minIdx, lastInserted);
    lastInserted++;
    if (minIdx === i) minIdx++;
  }
}

module.exports = {
    selectionSort,
    swap
};