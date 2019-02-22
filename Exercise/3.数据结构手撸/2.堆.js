class MinHeap {
  constructor() {
    this.heap = [];
  }
  static swap(arr, i, j) {
    let tmp = arr[i - 1];
    arr[i - 1] = arr[j - 1];
    arr[j - 1] = tmp;
  }
  static less(arr, i, j) {
    return arr[i - 1] < arr[j - 1];
  }
  add(val) {
    this.heap.push(val)
    this.heapUp()
  }
  heapUp() {
    let k = this.heap.length;
    while(k > 1) {
      let par = Math.floor(k / 2);
      if (MinHeap.less(this.heap, par, k)) {
        return;
      }
      MinHeap.swap(this.heap, par, k);
      k = par;
    }
  }
  get() {
    return this.heap[0];
  }
  poll() {
    if (this.heap.length === 0) return null;
    MinHeap.swap(this.heap, 1, this.heap.length);
    // 注意不是先 shift，再交换第一个元素和最后一个元素，因为那样会破坏堆结构
    let value = this.heap.pop();
    this.heapDown();
    return value;
  }
  heapDown() {
    let k = 1;
    let N = this.heap.length;
    while (2 * k <= N) {
      let left = 2 * k;
      let right = 2 * k + 1;
      let tmp = left;
      if (right <= N && !MinHeap.less(this.heap, left, right)) {
        tmp = right;
      }
      if (MinHeap.less(this.heap, k, tmp)) {
        return;
      }
      MinHeap.swap(this.heap, k, tmp);
      k = tmp;
    }
  }
}

let heap = new MinHeap();

for(let i = 0; i < 10; i++) {
  heap.add(Math.floor(Math.random() * 100));
}

for (let i = 0; i < 10; i++) {
  console.log(heap.poll());
}