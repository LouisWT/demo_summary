// p 44
// 1. 二维数组，每行从左到右递增
// 2. 每列从上到下递增
// 输入一个整数，判断数组是否包含这个整数


let arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
];

let arr1 = [
  [1, 2, 8],
  [2, 4, 9],
  [4, 7, 10],
  [6, 8, 11]
]

let arr2 = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13]
]

// 方法1:
// 从对角线上找到第一个比搜寻元素更大的元素，从而确定一个边界
// 在边界上行搜寻，列搜寻，从而找到那个元素
// 时间复杂度 o(n) 或 o(m)
// 空间复杂度 o(1)
function checkNumberExists(array, number) {
  const row = array.length;
  const column = array[0].length;
  // 取最小的正方形的维数，进行对角线比较
  const size = row >= column ? column : row;
  let initialPoint = size;
  for(let i = 0; i < size; i += 1) {
    if (array[i][i] > number) {
      initialPoint = i - 1;
      break;
    }
    if (array[i][i] === number) {
      return true;
    }
  }
  // [0, 0] 就大于那个数，肯定没有
  if (initialPoint < 0) {
    return false;
  }
  // 横向搜寻
  for (let i = initialPoint; i < column; i++) {
    const value = array[initialPoint][i]
    if (value === number) {
      return true;
    }
    if (array[initialPoint][i] > number) {
      break;
    }
  }
  // 纵向搜寻
  for (let i = initialPoint; i < row; i++) {
    const value = array[i][initialPoint]
    if (value === number) {
      return true;
    }
    if (value > number) {
      break;
    }
  }
  return false;
}

console.log(checkNumberExists(arr, 7));
console.log(checkNumberExists(arr1, 7));
console.log(checkNumberExists(arr2, 7));
console.log(checkNumberExists(arr, 5));
console.log(checkNumberExists(arr1, 5));
console.log(checkNumberExists(arr2, 5));


// 方法2:
// 从矩阵的右上角(左下角同理)开始搜寻，如果元素比搜寻元素大，那就向前一列，如果元素比搜寻元素小，那就向下一行，直到找到或者遍历完
// 时间复杂度 o(n) 或 o(m)
// 空间复杂度 o(1

function newCheckNumberExists(array, number) {
  let find = false;
  const rows = array.length;
  const columns = array[0].length;
  // 1. 参数验证
  if(array && rows > 0 && columns > 0) {
    // 2. 从第一行，最后一列开始搜寻
    let row = 0;
    let column = columns - 1;
    // 3. 到最后一行或到第一列为止
    while(row < rows && column >= 0) {
      // 找到了
      if (array[row][column] === number) {
        find = true;
        break;
      }
      // 如果元素比搜寻元素大，那就往前一列
      else if (array[row][column] > number) {
        --column;
      } else {
      // 如果元素比搜寻元素小，那就向下一行
        ++row;
      }
    }
  }
  return find;
}

console.log(newCheckNumberExists(arr, 7));
console.log(newCheckNumberExists(arr1, 7));
console.log(newCheckNumberExists(arr2, 7));
console.log(newCheckNumberExists(arr, 5));
console.log(newCheckNumberExists(arr1, 5));
console.log(newCheckNumberExists(arr2, 5));