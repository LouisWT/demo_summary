function Print(pRoot) {
    if (!pRoot) return [];
    const oddStack = [pRoot];
    const evenStack = [];
    const arr = [];
    printTree(oddStack, evenStack, arr);
    return arr;
}

function printTree(oddStack, evenStack, arr) {
    while (oddStack.length !== 0 || evenStack.length !== 0) {
        const odd = [];
        for (let i = 0; i < oddStack.length; i++) {
            odd.push(oddStack[i].val);
        }
        if (odd.length > 0) arr.push(odd);
        while (oddStack.length != 0) {
            const node = oddStack.pop();
            if (node.right) evenStack.push(node.right);
            if (node.left) evenStack.push(node.left);
        }
        const even = [];
        for (let i = 0; i < evenStack.length; i++) {
            even.push(evenStack[i].val);
        }
        if (even.length > 0) arr.push(even);
        while (evenStack.length != 0) {
            const node = evenStack.pop();
            if (node.left) oddStack.push(node.left);
            if (node.right) oddStack.push(node.right);
        }
    }
}

const tree = {
    val: 8,
    left: {
        val: 6,
        left: {
            val: 5,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
    right: {
        val: 10,
        left: {
            val: 9,
            left: null,
            right: null,
        },
        right: {
            val: 11,
            left: null,
            right: null,
        },
    },
}

Print(tree);