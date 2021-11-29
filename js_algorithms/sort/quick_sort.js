// Быстрая сортирова (сортировка Хоара)
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let counter = 0;

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIdx = Math.round((arr.length - 1) / 2);
  const middleEl = arr[middleIdx];
  let less = [];
  let more = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === middleIdx) {
      continue;
    }

    if (arr[i] > middleEl) {
      more.push(arr[i]);
    } else {
      less.push(arr[i]);
    }

    counter++;
  }

  return [...quickSort(less), middleEl, ...quickSort(more)];
}

console.log(quickSort(array));
console.log(counter);
