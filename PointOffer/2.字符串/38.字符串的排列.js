
const str = 'abcd';

function getAllCompose(str) {
    if (!str) return [];
    const all = [];
    compose(str.split(''), 0, all);
    return all;
}

function compose(arr, init, all) {
    if (init === arr.length - 1) {
        if (!all.includes(arr.join(''))) {
            all.push(arr.join(''));
        }
        return;
    }
    for (let i = init; i < arr.length; i++) {
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