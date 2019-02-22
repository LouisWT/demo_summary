class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }
  find(node, index, currIndex) {
    if (!node) {
      return null;
    }
    if (index === currIndex) {
      return node;
    }
    return this.find(node.next, index, currIndex + 1);
  }
  checkIndex(index) {
    if (index < 0 || index > this.size) throw Error('index error')
  }
  getNode(index) {
    this.checkIndex(index);
    return this.find(this.head, index, 0);
  }
  addNode(value, index) {
    this.checkIndex(index);
    this.size++;
    if (!this.head) {
      this.head = new Node(value, null)
      return this.head;
    }
    if (index === 0) {
      let node = new Node(value, this.head);
      this.head = node;
      return node;
    }
    let prev = this.find(this.head, index - 1, 0);
    let node = new Node(value, prev.next);
    prev.next = node;
    return node;
  }
  insertNode(value) {
    return this.addNode(value, this.size);
  }
  removeNode(index) {
    this.checkIndex(index);
    this.size--;
    if (index === 0) {
      let node = this.head;
      this.head = this.head.next;
      node.next = null;
      return node;
    }
    let prev = this.find(this.head, index - 1, 0);
    let node = prev.next;
    if (!node) return null;
    prev.next = node.next;
    node.next = null;
    return node;
  }
}