// p 168
// 输入两个整数队列，第一个序列表示栈的压入顺序，第二个序列表示栈的弹出顺序，判断是否匹配

function IsPopOrder(pushV, popV) {
    if (!pushV || !popV) return false;
    // 1. 辅助栈
    const temp = [];
    let flag = true;
    while (popV.length > 0) {
        // 2. 取出一个弹出元素
        const ele = popV.shift();
        // 3. 在压入序列中找到这个元素
        const index = pushV.indexOf(ele);
        // 4. 如果在剩余的压入序列中没找到，并且栈顶不是这个元素，不匹配
        if (index == -1 && temp[temp.length - 1] != ele) {
            flag = false;
            break;
        }
        // 5. 在压入序列中找到了元素
        if (index != -1) {
            // 5.1. 将这个元素之前的元素都压进栈
            for (let i = 0; i < index; i++) {
                temp.push(pushV[i]);
            }
            // 5.2. 将压入栈的元素都从压入序列中删除
            pushV = pushV.slice(index + 1);
        }
        // 6. 栈顶元素与弹出元素相当，弹出栈顶
        else {
            temp.pop();
        }
    }
    return flag;
}
module.exports = {
    IsPopOrder: IsPopOrder
};