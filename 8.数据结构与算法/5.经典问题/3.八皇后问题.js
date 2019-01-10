// p 200
// 八皇后问题
// https://www.nowcoder.com/questionTerminal/de1e1ff46cd641178a147166156c9d83

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const N = parseInt(line);
  console.log(getNHou(N));
});

// 算法主要是基于排列
// 首先初始化一个8元素的数组，代表棋盘的每列
// 用 1 ~ 8初始化这个数组，代表棋盘的每行
// 由于行列都是唯一的，所以说不会出现同行或者同列的皇后，只需要从这八个数的排列中排除同对角线的排列就好了
function eightHou(arr, init, all) {
  if (init === arr.length) {
    all.push(arr.join(''));
    return;
  }
  for (let i = init; i < arr.length; i++) {
    let p = arr[init];
    arr[init] = arr[i];
    arr[i] = p;
    // 判断是否与之前的元素成对角关系
    let flag = false;
    for (let k = 0; k < init; k++) {
      if (Math.abs(init - k) === Math.abs(arr[init] - arr[k])) {
        flag = true;
        break;
      }
    }
    // 如果当前元素是在对角上的，就将元素位置调换回来，继续看后面的元素是否符合要求
    if (flag) {
      p = arr[init];
      arr[init] = arr[i];
      arr[i] = p;
      continue;
    }
    eightHou(arr, init + 1, all);
    p = arr[init];
    arr[init] = arr[i];
    arr[i] = p;
  }
}


function getNHou(N) {
  const arr = [];
  for (let i = 1; i <= 8; i++) {
    arr.push(i);
  }
  const all = [];
  newEightHou(arr, 0, all);
  all.sort((a, b) => {
    if (Number(a) > Number(b)) return 1;
    else return -1;
  });
  return all[N - 1];
}


// 优化下
function newEightHou(arr, init, all) {
  if (init === arr.length) {
    all.push(arr.join(''));
    return;
  }
  for (let i = init; i < arr.length; i++) {
    // 判断是否与之前的元素成对角关系
    let flag = false;
    for (let k = 0; k < init; k++) {
      if (Math.abs(init - k) === Math.abs(arr[i] - arr[k])) {
        flag = true;
        break;
      }
    }
    // 如果当前元素是在对角上的，就将元素位置调换回来，继续看后面的元素是否符合要求
    if (flag) {
      continue;
    }
    let p = arr[init];
    arr[init] = arr[i];
    arr[i] = p;
    newEightHou(arr, init + 1, all);
    p = arr[init];
    arr[init] = arr[i];
    arr[i] = p;
  }
}