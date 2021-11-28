// Линейный поиск
const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let counter = 0;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    counter++;
    if (target === arr[i]) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch(array, 11));
console.log(counter);
