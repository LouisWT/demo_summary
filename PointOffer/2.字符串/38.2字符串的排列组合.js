const str = 'abc';

function getAllCompose(str) {
    if (!str) return [];
    const all = [];
    for (let i = 1; i <= str.length; i++) {
        compose(str.split(''), 0, i, all, []);
    }
    return all;
}

function compose(arr, init, count, all, temp) {
    if (temp.length == count) {
        all.push(temp.join(''));
        return;
    }
    for (let i = init; i < arr.length; i++) {
        let p = arr[init];
        arr[init] = arr[i];
        arr[i] = p;
        temp.push(arr[init]);
        compose(arr, init + 1, count, all, temp);
        temp.pop();
        p = arr[init];
        arr[init] = arr[i];
        arr[i] = p;
    }
}

// 给 arr 中 count 个数组进行排列，tmp 用来保存中间结果
function compose(arr, init, count, all, temp) {
    if (temp.length === count) {
        all.push(temp.join(''));
        return;
    }
    for (let i = init; i < arr.length; i++) {
        swap(arr, init, i);
        temp.push(arr[init]);
        compose(arr, init + 1, count, all, temp);
        temp.pop();
        swap(arr, init, i);
    }
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

const all = getAllCompose(str);
console.log(all);