const sortedFrequency = (arr, num) => {
    const firstIdx = findFirstIdx(arr, num);
    if (firstIdx === -1) return firstIdx;
    const lastIdx = findLastIdx(arr, num);
    return lastIdx - firstIdx + 1;
}

const findFirstIdx = (arr, num, low = 0, high = arr.length - 1) => {
    while(low <= high){
        const mid = low + Math.floor((high - low)/2);
        if((mid === 0 || num > arr[mid-1]) && arr[mid] === num){
            return mid;
        } else if (num > arr[mid]){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};

const findLastIdx = (arr, num, low = 0, high = arr.length - 1) => {
    while(low <= high){
        const mid = low + Math.floor((high - low) / 2);
        if((mid === arr.length - 1 || num < arr[mid+1]) && arr[mid] === num){
            return mid;
        } else if (num < arr[mid]){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3);

module.exports = sortedFrequency