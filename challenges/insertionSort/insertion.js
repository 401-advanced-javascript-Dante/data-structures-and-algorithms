'user strict';



function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {

    let current = arr[i];
    let previous = i - 1;

    while (previous >= 0 && arr[previous] > current) {
      arr[previous + 1] = arr[previous];
      previous = previous - 1;
    }
    arr[previous + 1] = current;
  }

  return arr;
}


// console.log(insertionSort([20, 18, 12, 8, 5, -2]));

module.exports = insertionSort ;