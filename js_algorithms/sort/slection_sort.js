// Сортировка алгоритмом выбора (сортировка выбором)
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let counter = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) { // если следующий эл-т arr[j] меньше предыдущего arr[i], то меняем их местами
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      counter++;
    }
  }

  return arr;
}

console.log(selectionSort(array));
console.log(counter);
