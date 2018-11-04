// p92
// 有一个m行n列的方格，机器人从 0,0 的格子开始移动，每次可以向四个方向移动一格
// 不能进入行左边列坐标数位之和大于 k 的格子
//　机器人能到达多少格子

// 自己写的源码贼垃圾，还是看书吧
function countBlock(M, N, k) {
    if (M == undefined || N == undefined || k == undefined) {
        return;
    }
    const pos = ['0,0'];
    const path = ['0,0'];
    getPath(M, N, path, pos);
    return pos.length;
}

function sum(x, y) {
    const x1 = x % 10;
    const x2 = (x - x1) / 10;
    const y1 = y % 10;
    const y2 = (y - y1) / 10;
    return x1 + x2 + y1 + y2;
}

function getPath(M, N, k, path, pos) {
    const lastNode = path[path.length - 1].split(',');
    lastNode[0] = Number(lastNode[0])
    lastNode[1] = Number(lastNode[1])
    const pointsum = sum(lastNode[0], lastNode[1]);
    let initial = pos.length;
    if (lastNode[0] >= 1) {
        if (pointsum - 1 <= k) {
            const up = [lastNode[0] - 1, lastNode[1]].join(',');
            if (!pos.includes(up)) {
                pos.push(up);
            }
        }
    }
    // 右方的可能点
    if (lastNode[1] <= arr[0].length - 2) {
        if (pointsum + 1 <= k) {
            const right = [lastNode[0], lastNode[1] + 1].join(',');
            if (!pos.includes(right)) {
                pos.push(right);
            }
        }
    }
    // 下方可能点
    if (lastNode[0] <= arr.length - 2) {
        if (pointsum + 1 <= k) {
            const down = [lastNode[0] + 1, lastNode[1]].join(',');
            if (!pos.includes(down)) {
                pos.push(down);
            }
        }
    }
    // 左方可能点
    if (lastNode[1] >= 1) {
        if (pointsum - 1 <= k) {
            const left = [lastNode[0], lastNode[1] - 1].join(',');
            if (!pos.includes(left)) {
                pos.push(left);
            }
        }
    }
    if (!pos[initial]) {
        return;
    }
    for (let i = initial; i < pos.length; i++) {
        const newPath = [
            ...path,
            pos[i],
        ]
        getPath(M, N, k, newPath, pos);
    }
}

// 书上代码，简洁不少
function newCountBlock(k, M, N) {
    if (M < 0 || N < 0 || k < 0) {
        return 0;
    }
    const visited = [];
    for (let i = 0; i < M; i++) {
        const temp = new Array(N);
        temp.fill(false);
        visited[i] = temp;
    }
    let count = movingCountCore(k, M, N, 0, 0, visited);
    return count;
}

function movingCountCore(k, M, N, row, col, visited) {
    let count = 0;
    if (check(k, M, N, row, col, visited)) {
        visited[row][col] = true;
        count = 1 + movingCountCore(k, M, N, row - 1, col, visited)
            + movingCountCore(k, M, N, row + 1, col, visited)
            + movingCountCore(k, M, N, row, col - 1, visited)
            + movingCountCore(k, M, N, row, col + 1, visited)
    }
    return count;
}

function check(k, M, N, row, col, visited) {
    if (row >= 0 && row < M && col >= 0 && col < N && sum(row, col) <= k && !visited[row][col]) {
        return true;
    }
    return false;
}