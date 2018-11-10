// p145
// 两个递增排序的链表，合并两个链表节点，节点依然递增

function Merge(pHead1, pHead2) {
    if (pHead1 == null || pHead2 == null) return pHead1 || pHead2;
    let newRoot;
    let node1 = pHead1;
    let node2 = pHead2;
    // 反正最后返回的头节点不是 pHead1 就是 pHead2，所以node不用纠结是哪个
    let node = {};
    while (node1 != null && node2 != null) {
        if (node1.val > node2.val) {
            node.next = node2;
            node2 = node2.next;
        } else {
            node.next = node1;
            node1 = node1.next;
        }
        node = node.next;
        if (!node1) {
            node.next = node2;
        } else if (!node2) {
            node.next = node1;
        }
    }
    newRoot = pHead1.val <= pHead2.val ? pHead1 : pHead2;
    return newRoot;
}