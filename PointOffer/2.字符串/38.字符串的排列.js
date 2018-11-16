// p 197
// 输入一个字符串，打印出该字符串中所有字符的所有排列

const str = 'abc';

function getAllCompose(str) {
  if(!str) return[];
  const all = [];
  compose(str.split(''), 0, all);
  // 为了通过牛客的测试
  all.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  })
  return all;
}

// 看成两部分，一部分是第一个值，一部分是剩下所有值的排列
// 1. 固定第一个值，求余下所有值的排列
// 2. 将第一个值与第二个值交换，
function compose(arr, init, all) {
  if (init == arr.length - 1) {
    // 如果有重复字符，防止加入重复排列
    if (!all.includes(arr.join(''))) {
      all.push(arr.join(''));
    }
    return;
  }
  for(let i = init; i < arr.length; i++) {
    // if (arr[init] == arr[i]) continue;
    // 改变第一个值
    let temp = arr[init];
    arr[init] = arr[i];
    arr[i] = temp;
    compose(arr, init + 1, all);
    temp = arr[init];
    arr[init] = arr[i];
    arr[i] = temp;
  }
} 

const all = getAllCompose(str);
console.log(all);

