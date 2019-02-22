// p142


const linkList = {
    next: {
        next: {
            next: {
                next: null,
                value: 4
            },
            value: 3
        },
        value: 2
    },
    value: 1
};

function ReverseList(pHead) {
    if (!pHead) return null;
    const array = [];
    let node = pHead;
    while (node) {
        array.push(node)
        node = node.next;
    }
    let root = array[array.length - 1];
    node = root;
    for (let i = array.length - 2; i >= 0; i--) {
        node.next = array[i];
        node = node.next;
    }
    node.next = null;
    return root;
}

function ReverseList(pHead) {
    if (!pHead) return;
    let prev = null;
    let current = pHead;
    let nextNode = pHead.next;
    while (nextNode) {
        current.next = prev;
        const temp = nextNode.next;
        nextNode.next = current;
        prev = nextNode;
        current = temp;
        // 到最后一个节点
        if (temp.next) {
            nextNode = temp.next;
        } else {
            current.next = prev;
            nextNode = null;
        }
    }
    return current;
}

function ReverseList(pHead) {
    if (!pHead) return null;
    let prev = null;
    let curr = pHead;
    let next = pHead.next;
    while (next) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = curr.next;
    }
    // 执行最后一步连接
    curr.next = prev;
    return curr;
}

console.log(ReverseList(linkList));

module.exports = {
    ReverseList: ReverseList
};