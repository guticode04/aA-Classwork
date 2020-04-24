function countingSort(arr, max) {
    const counters = new Array(max + 1).fill(0);
    const results = [];

    for(let i = 0; i < arr.length; i++) {
        counters[arr[i]]++;
    }

    for(let i = 0; i < counters.length; i++) {
        while (counters[i] > 0) {
            results.push(i);
            counters[i]--;
        }
    }

    return results;
}


module.exports = {
    countingSort
};