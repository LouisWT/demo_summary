// p 171
// 不分行从上到下打印二叉树
function PrintFromTopToBottom(root) {
    if (!root) return [];
    const array = [];
    const nodes = [root];
    printTopBottom(nodes, array);
    return array;
}

function printTopBottom(nodes, array) {
    if (nodes.length == 0) return;
    const node = nodes.shift();
    array.push(node.val);
    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
    printTopBottom(nodes, array);
}

module.exports = {
    PrintFromTopToBottom: PrintFromTopToBottom
};