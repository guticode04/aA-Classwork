// you may assume that the array will always have a null element at the 0-th index
// [null, 50, 42, 27, 32, 24]

function isMaxHeap(array, idx=1) {
	let isCompleteHeap = array.every(ele => ele !== undefined);
	return isCompleteHeap && _isMaxHeap(array);
}

//helper function
function _isMaxHeap(arr, idx = 1) {
	if(arr[idx] === undefined) return true;
	let leftChildIdx = 2 * idx;
	let rightChildIdx = 2 * idx + 1;
	let leftChildVal = arr[leftChildIdx] === undefined ? -Infinity : arr[leftChildIdx];
	let rightChildVal = arr[rightChildIdx] === undefined ? -Infinity : arr[rightChildIdx];

	return (arr[idx] > leftChildVal && arr[idx] > rightChildVal)
		&& (_isMaxHeap(arr, leftChildIdx) && _isMaxHeap(arr, rightChildIdx));
}


module.exports = {
    isMaxHeap
};