// Бинарный поиск
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // Возможен только на отсоритированных данных
let counter = 0;

function binarySearch(arr, target, startIdx = 0, endIdx = arr.length - 1) {
  const middleIdx = Math.round((startIdx + endIdx) / 2);
  counter++;

  if (target < arr[0] || target > arr[arr.length - 1]) {
    return -1;
  }

  if (target === arr[middleIdx]) {
    return middleIdx;
  }

  if (target > arr[middleIdx]) {
    startIdx = middleIdx + 1;
  } else {
    endIdx = middleIdx - 1;
  }

  return binarySearch(arr, target, startIdx, endIdx);
}

console.log(binarySearch(array, 8));
console.log(counter);
