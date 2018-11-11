// p 165
// 定义栈的数据结构，实现一个能得到栈最小元素的 min 函数
// min pop push 的时间复杂度都是 O(1)

const stack = [];
const minStack = [];
let minEle;

function push(node) {
    // ** 最开始是 undefined
    if (minEle == undefined || node < minEle) minEle = node;
    stack.push(node);
    minStack.push(minEle)
}
function pop() {
    minStack.pop();
    return stack.pop();
}
function top() {
    return stack[stack.length - 1];
}
function min() {
    return minStack[minStack.length - 1];
}
module.exports = {
    push: push,
    pop: pop,
    top: top,
    min: min
};