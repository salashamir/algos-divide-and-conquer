function countZeroes(arr) {
    // find the index of the first zero int he arr
    const firstZero = findIdxOfFirstZero(arr);
    // if there are no zeros in the array function will return a -1
    if (firstZero === -1) return 0;

    return arr.length - firstZero;
}

const findIdxOfFirstZero = (arr, low = 0, high = arr.length - 1) => {
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2)
        if((mid === 0 || arr[mid-1] === 1) && arr[mid] == 0){
            return mid;
        } else if (arr[mid] === 1){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

module.exports = countZeroes