/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 1. 首先去掉 list 中为 null 的节点，防止干扰后面的排序
// 2. 然后在 list 上面进行堆排序
// 3. 然后取出第一个节点作为当前节点，对剩下的节点继续 merge
// 4. 取出当前节点后要调整堆，如果 lists 就一个元素了，那么没必要调整，如果有多个元素，那么要先将堆最尾的元素替换堆顶元素（因为被取出来，并 = next 了），然后向下调整堆，然后被替换下的堆顶元素放到末尾，向上调整堆
function mergeKLists(lists) {
  if (!lists) return null;
  // 把 lists 中为 null 的节点全去掉，这个很重要
  let i = 0;
  while (i < lists.length) {
    if (lists[i] === null) lists.splice(i, 1);
    else i++;
  }
  if (lists.length === 0) return null;
  heapSort(lists);
  return merge(lists);
}

function merge(lists) {
  // 到最后会 lists.length === 0
  if (lists.length === 0) return null;
  let res = lists[0];
  lists[0] = lists[0].next;
  replace(lists);
  res.next = merge(lists);
  return res;
}

function heapSort(arr) {
  let N = arr.length;
  for (let k = Math.floor(N / 2); k >= 1; k--) {
    sink(arr, k, N);
  }
  while (N > 1) {
    swap(arr, 1, N--);
    sink(arr, 1, N);
  }
}
function sink(arr, k, N) {
  while (2 * k <= N) {
    let left = 2 * k;
    let right = 2 * k + 1;
    let tmp = left;
    if (right <= N && less(arr, left, right)) tmp = right;
    if (!less(arr, k, tmp)) break;
    swap(arr, k, tmp);
    k = tmp;
  }
}

function replace(lists) {
  let curr = lists[0];
  // 如果只有一个元素了，那么没必要进行堆调整
  // 不要直接 lists[0] = lists.pop()
  // 因为如果没有元素的话也会 lists[0] = undefined
  if (lists.length === 1) {
    if (!curr) lists.pop();
    return;
  }
  let tail = lists.pop();
  lists[0] = tail;
  heapDown(lists);
  if (!curr) return;
  lists.push(curr);
  heapUp(lists);
}

function heapDown(lists) {
  let k = 1;
  let N = lists.length;
  while (2 * k <= N) {
    let left = 2 * k;
    let right = 2 * k + 1;
    let tmp = left;
    if (right <= N && !less(lists, left, right)) tmp = right;
    if (less(lists, k, tmp)) break;
    swap(lists, k, tmp);
    k = tmp;
  }
}

function heapUp(lists) {
  let k = lists.length;
  while (k > 1) {
    let par = Math.floor(k / 2);
    if (less(lists, par, k)) break;
    swap(lists, par, k);
    k = par;
  }
}

function less(arr, i, j) {
  return arr[i - 1].val < arr[j - 1].val;
}

function swap(arr, i, j) {
  let tmp = arr[i - 1];
  arr[i - 1] = arr[j - 1];
  arr[j - 1] = tmp;
}

// 方法2.
// 将列表进行两两合并，类似归并的过程
// 无论是代码的复杂性还是速度都比上面的方法更好
function mergeKLists(lists) {
  return partition(lists, 0, lists.length - 1);
}

function partition(arr, lo, hi) {
  if (lo > hi) return null;
  if (lo == hi) return arr[lo];
  let mid = Math.floor((lo + hi) / 2);
  let l1 = partition(arr, lo, mid);
  let l2 = partition(arr, mid + 1, hi);
  return merge(l1, l2);
}

function merge(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let res;
  if (l1.val < l2.val) {
    res = l1;
    res.next = merge(l1.next, l2);
  } else {
    res = l2;
    res.next = merge(l1, l2.next);
  }
  return res;
}