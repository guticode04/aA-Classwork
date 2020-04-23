// arr = [2, 1]


function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) { 
    for(let j = i - 1; j >= 0; j--) {
        if(arr[i] <= arr[j] && (j === 0 || arr[j-1] < arr[i])) {
            arr.splice(j, 0, arr[i]); // insert copy of number into position
            arr.splice(i + 1, 1); // delete old number
        }
    }
  }
  return arr;
}

module.exports = {
    insertionSort
};
