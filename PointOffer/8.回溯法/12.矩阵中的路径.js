// p89
// 判断一个矩阵中是否存在一条包含某字符串所有字符的路径

const arr = [
    ['a', 'b', 't', 'g'],
    ['c', 'f', 'c', 's'],
    ['j', 'd', 'e', 'h'],
];

const str1 = 'bfce';
const str2 = 'abfb';
const str3 = 'btcfb';

function checkPath(arr, str) {
    if (!arr || !str) {
        return false;
    }
    const pos = [];
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[0].length; y++) {
            if (arr[x][y] === str[0]) {
                pos.push([x, y]);
            }
        }
    }
    let flag = false;
    for (let i = 0; i < pos.length; i++) {
        const path = [pos[0].join(',')];
        if (checkPathFrom(arr, path, str)) {
            flag = true;
            break;
        }
    }
    return flag;
}

function checkPathFrom(arr, path, str) {
    const lastNode = path[path.length - 1].split(',');
    lastNode[0] = Number(lastNode[0]);
    lastNode[1] = Number(lastNode[1]);
    const nextChar = str[path.length];
    if (!nextChar) {
        return true;
    }
    const pos = [];
    // 上方的可能点
    if (lastNode[0] >= 1) {
        if (arr[lastNode[0] - 1][lastNode[1]] == nextChar) {
            const up = [lastNode[0] - 1, lastNode[1]].join(',');
            if (!path.includes(up)) {
                pos.push(up);
            }
        }
    }
    // 右方的可能点
    if (lastNode[1] <= arr[0].length - 2) {
        if (arr[lastNode[0]][lastNode[1] + 1] == nextChar) {
            const right = [lastNode[0], lastNode[1] + 1].join(',');
            if (!path.includes(right)) {
                pos.push(right);
            }
        }
    }
    // 下方可能点
    if (lastNode[0] <= arr.length - 2) {
        if (arr[lastNode[0] + 1][lastNode[1]] == nextChar) {
            const down = [lastNode[0] + 1, lastNode[1]].join(',');
            if (!path.includes(down)) {
                pos.push(down);
            }
        }
    }
    // 左方可能点
    if (lastNode[1] >= 1) {
        if (arr[lastNode[0]][lastNode[1] - 1] == nextChar) {
            const left = [lastNode[0], lastNode[1] - 1].join(',');
            if (!path.includes(left)) {
                pos.push(left);
            }
        }
    }
    if (pos.length === 0) {
        return false;
    }
    let flag = false;
    for (let i = 0; i < pos.length; i++) {
        const newPath = [
            ...path,
            pos[i],
        ]
        if (checkPathFrom(arr, newPath, str)) {
            flag = true;
            break;
        };
    }
    return flag;
}

console.log(checkPath(arr, str1));
console.log(checkPath(arr, str2));
console.log(checkPath(arr, str3));
