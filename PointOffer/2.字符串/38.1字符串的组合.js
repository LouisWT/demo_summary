// 输入 n 个字符，求字符的所有组合

const str = 'abc';

// 目前不能解决有重复字符的情况
function getAllCompose(str) {
    if (!str) return [];
    const all = [];
    for (let i = 1; i <= str.length; i++) {
        compose(str.split(''), 0, i, all, []);
    }
    all.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
    })
    return all;
}

function compose(arr, init, count, all, temp) {
    if (temp.length == count) {
        all.push(temp.join(''));
        return;
    }
    for (let i = init; i < arr.length; i++) {
        temp.push(arr[i]);
        compose(arr, i + 1, count, all, temp);
        temp.pop();
    }
}

const all = getAllCompose(str);
console.log(all);
