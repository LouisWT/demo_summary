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
        temp.push(arr[i]);
        compose(arr, i + 1, count, all, temp);
        temp.pop();
    }
}

const all = getAllCompose(str);
console.log(all);