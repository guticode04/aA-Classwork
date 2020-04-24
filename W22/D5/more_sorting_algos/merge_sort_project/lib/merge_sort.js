function merge(array1, array2) {

    let merged = [];

    while(array1.length > 0 && array2.length > 0) {
        if (array1[0] > array2[0]){
            merged.push(array2.shift())
        } else if (array2[0] > array1[0]) {
            merged.push(array1.shift())
        } else {
            merged.push(array1.shift())
        }
    }

    // console.log(merged, array1, array2);
    merged = merged.concat(array1, array2);
    return merged;

}

function mergeSort(array) {

    if (array.length <= 1) return array;

    let mid_idx = Math.floor(array.length/2);

    let left = array.slice(0,mid_idx);
    let right = array.slice(mid_idx);

    let sorted_left = mergeSort(left);
    let sorted_right = mergeSort(right);

    return merge(sorted_left, sorted_right);

}
console.log(mergeSort([2, -1, 4, 3, 7, 3]));

module.exports = {
    merge,
    mergeSort
};