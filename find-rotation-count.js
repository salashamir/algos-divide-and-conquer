const findRotationCount = (arr) => {
  if (arr.length === 0) return 0;
  const pivotIdx = findPivotIdx(arr);

  return pivotIdx;
}

const findPivotIdx = (arr) => {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end){
        const mid = Math.floor((start + end) / 2);
        if(arr[mid] > arr[mid + 1]){
            return mid + 1;
        } else if (arr[start] <= arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

module.exports = findRotationCount