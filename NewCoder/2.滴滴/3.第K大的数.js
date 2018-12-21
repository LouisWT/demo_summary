const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 获取参数时一定要在 rl 外面啊，不然局部变量很容易就丢了
let count = 0;
let arr = [];
let index = -1;

rl.on('line', (line) => {
    if (count == 0) {
        arr = line.split(' ');
        count = 1;
    } else if (count == 1) {
      index = parseInt(line);
      console.log(arr);
      findK(arr, index);
    }
})
// 使用堆排序，从后往前数K个数就是需要的数，这样的话不需要对所有元素排序
function findK(arr, index) {
    if (!arr || index == -1 || index <= 0) return;
    const value = heapSort(arr, index);
    console.log(value);
}

function heapSort(arr, index) {
    let N = arr.length;
    for (let k = Math.floor(N / 2); k >= 1; k--) {
        sink(arr, k, N);
    }
    while(arr.length - N < index) {
        exch(arr, 1, N--);
        sink(arr, 1, N);
    }
    return arr[arr.length - index];
}

function sink(arr, k, N) {
    while (2 * k <= N) {
        let j = 2 * k;
        if (j < N && less(arr, j, j + 1)) j++;
        if (!less(arr, k, j)) break;
        exch(arr, k, j);
        k = j;
    }
}

function less(arr, i, j) {
  // 从命令行读取的输入都是字符串类型的，要是想用字符串比较，必须先解析一下
  return parseInt(arr[i - 1]) < parseInt(arr[j - 1]);
}

function exch(arr, i, j) {
    const temp = arr[i-1];
    arr[i-1] = arr[j-1];
    arr[j-1] = temp;
}