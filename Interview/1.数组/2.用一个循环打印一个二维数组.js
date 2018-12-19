// p190

function printArr(arr) {
  if (!arr) return;
  printMatrix(arr);
}

function printMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      console.log(arr[i]);
    } else {
      printMatrix(arr[i]);
    }
  }
}

let arr = new Array(3);

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 5; j++) {
    arr[i].push(Math.floor(Math.random() * 100));
  }
}

console.log(arr);

printArr(arr);