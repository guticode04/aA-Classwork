// Radix - Sort
// input = [4, 9, 0, 23, 15, 100, 66, 41, 5, 10];
// expected = [0, 4, 5, 9, 10, 15, 23, 41, 66, 100];
function radixSort(arr) {

    if (arr.length <= 1) return arr;
    // if (!Array.isArray(arr)) return null;
    if(!(arr instanceof Array)) return null;

    let maxDigits = getMaxDigits(arr);
    
    for (let place = 0; place < maxDigits; place++) {
        let buckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++){
            let currentNo = arr[i];
            let digit = getDigitFrom(currentNo, place);
            buckets[digit].push(currentNo);
        }
        arr = [].concat(...buckets)
    }

    return arr;
}

// What digit is at the given place value in num
// 347, 2 => 3
// 10 * 10  => 347/ 100
function getDigitFrom(num, place){
    const divider = Math.pow(10, place);
    const result = Math.floor(num / divider);
    return result % 10;
}

// How many digits are in num
// 3476 => 4
function getIntLength(num){
    let count = 0;
    while (num > 9) {
        count++;
        num = Math.floor(num / 10);
    }
    count++;
    return count;
}

// How many digits does the integer with the most digits have
// [4, 23, 345, 678] => 3
function getMaxDigits(nums){
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max) max = nums[i];
    }
    return getIntLength(max);
}

// console.log(radixSort([4, 9, 0, 23, 15, 100, 66, 41, 5, 10]));

module.exports = {
    radixSort
};