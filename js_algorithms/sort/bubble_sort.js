// Сортировка пузырьком (пузырьковая сортировка)
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let counter = 0;

function bubbleSort(arr) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (arr[j] > arr[j + 1]) { // если текущий эл-т arr[j] больше слудующего  arr[j + 1], то их меняют местами
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
      counter++;
    }
  }

  return arr;
}

console.log(bubbleSort(array));
console.log(counter);
