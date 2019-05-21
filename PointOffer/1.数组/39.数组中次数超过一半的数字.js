function findNumber(arr) {
    if (!arr) return;
    return partFind(arr, 0, arr.length - 1, Math.floor(arr.length / 2));
}
// 1. 验证中间的数字是否真的出现次数超过了一半
function checkHalf(arr, i, M) {
    const v = arr[i];
    let times = 0;
    for (let val of arr) {
        if (v == val) times++;
        if (times > M) return val;
    }
    return 0;
}
// 2. 找到中位数
function partFind(arr, lo, hi, M) {
    // 3. 很关键，如果中位数出现在边界，那么 j 可能一直到不了，导致结果错误
    if (lo == hi && lo == M) {
        return checkHalf(arr, M, M);
    }
    if (lo >= hi) return 0;
    const j = partition(arr, lo, hi);
    if (j == M) {
        return checkHalf(arr, M, M);
    }
    else if (j < M) {
        // 这个 return 不加你怎么 返回回去啊
        return partFind(arr, j + 1, hi, M);
    }
    else return partFind(arr, lo, j - 1, M);
}

function partition(arr, lo, hi) {
    let i = lo;
    let j = hi + 1;
    const val = arr[lo];
    while (true) {
        while (arr[++i] <= val) { if (i == hi) break; }
        while (arr[--j] >= val) { if (j == lo) break; }
        if (i >= j) break;
        swap(arr, i, j);
    }
    swap(arr, lo, j);
    return j;
}

// 方法二
// 因为要找的数占了所有数的一半多，保存两个数，一个是数组中的一个数字，一个是它出现的次数
// 1. 遍历到下一个数的时候，如果跟当前数相同，那么次数加1，否则次数减1
// 2. 如果次数为0，那么要保存当前数字，并且次数加1
function newFindNumber(arr) {
    if (!arr) return;
    let time = 0;
    let val;
    for (let i = 0; i < arr.length; i++) {
        if (time == 0) {
            time++;
            val = arr[i];
        }
        else if (arr[i] == val) {
            time++;
        }
        else time--;
    }
    return checkHalf(arr, val, Math.floor(arr.length / 2));
}

function checkHalf(arr, val, M) {
    let times = 0;
    for (let v of arr) {
        if (v == val) times++;
        if (times > M) return val;
    }
    return 0;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}