// p68 
// 用两个栈实现一个队列

const a = [1, 2, 3, 4, 5];

// 这个题对JS来说小意思，就不用算法了
function appendTail(arr, ele) {
    arr.push(ele);
}

function deleteHead(arr) {
    arr.shift();
}

appendTail(a, 6);
deleteHead(a);

console.log(a);
