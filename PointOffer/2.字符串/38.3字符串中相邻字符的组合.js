// 输入 n 个字符，求相邻字符的所有组合
// https://www.nowcoder.com/questionTerminal/837f4d04f5cb4f26a8215b2b95cc76a5

const str = 'bac';

// 目前不能解决有重复字符的情况
// 这个题目的要求相对低一点，只要对结果去重就行了
// 比如输入 array
// 结果为 a r y ar ay ra rr arr ray rra arra rray array
// 也就是说可以出现 ar 和 ra，然而这其实是同一个组合
function getAllCompose(str) {
    if (!str) return [];
    const all = [];
    for (let i = 1; i <= str.length; i++) {
        compose(str.split(''), 0, i, all, [], 0);
    }
    all.sort((a, b) => {
      if (a.length > b.length) return 1;
      else if (a.length === b.length && a > b) return 1;
      else return -1; 
    })
    return all;
}

function compose(arr, init, count, all, temp, start) {
    if (temp.length == count) {
       
        if (!all.includes(temp.join(''))) {
          all.push(temp.join(''));
        }
        return;
    }
    for (let i = init; i < arr.length; i++) {
        if (temp.length == 0) start = i;
        if (i >= start + count) break;
        temp.push(arr[i]);
        compose(arr, i + 1, count, all, temp, start);
        temp.pop();
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
    const all = getAllCompose(line);
    // 最后加个空格是为了符合牛客的输出要求
    console.log(all.join(' '), ' ');
});