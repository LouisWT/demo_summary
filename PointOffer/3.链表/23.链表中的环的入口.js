// p139
// 如果一个链表中包含环，找出环的入口节点

function EntryNodeOfLoop(pHead) {
    // write code here
    if (pHead == null) return null;
    let slow = pHead.next;
    if (slow == null) return null;
    let fast = slow.next;
    // 1. 找到环中任意一个节点
    while (fast != null && slow != null) {
        if (fast == slow) break;
        fast = fast.next;
        slow = slow.next
        if (fast != null) fast = fast.next;
    }
    if (fast != slow) return null;
    // 2. 找到环中有多少个节点
    let count = 1;
    // ** 这个边界条件很重要，关系到 count 能否表示环的节点总数
    while (fast.next != slow) {
        fast = fast.next;
        ++count;
    }
    return findKNode(pHead, count);
}

function findKNode(pHead, count) {
    let first = pHead;
    let behind = pHead;
    // 找到倒数第 count 个节点
    // ** 这个条件也很重要, 不然如果不能相遇就会死循环
    // 先走 k-1 步
    for (let i = 0; i < count; i++) {
        first = first.next;
    }
    // ** 有环形是不会有某个节点是 null 的，所以不能照搬上一题!!!.
    while (first != behind) {
        first = first.next;
        behind = behind.next;
    }
    return behind;
}

module.exports = {
    EntryNodeOfLoop: EntryNodeOfLoop
};