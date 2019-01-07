// append
// insert
// remove
// removeAt
// indexOf
// getHead
// getTail
function DupLinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };
  let length = 0;
  let head = null;
  let tail = null;
  
  this.append = function (element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      let current = head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
      tail = node;
    }
    length++;
  }

  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head;
      let previous;
      let index = 0;
      if (position === 0) {
        node.next = current;
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = tail;
        tail = node;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = node;
        node.prev = previous;
        current.prev = node;
        node.next = current;
      }
      length++;
      return true;
    }
    return false;
  }

  this.removeAt = function(position) {
    if (position >= 0 && position <= length - 1) {
      let current = head;
      let previous;
      let index = 0;
      if (position === 0) {
        head = current.next;
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element; 
    }
    return null;
  }

  this.indexOf = function (element) {
    let current = head;
    let index = 0;
    while (current.next) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    if (element == current.element){
      return index;
    }
    return -1;
  }

  this.remove = function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  this.size = function() {
    return length;
  }

  this.getHead = function() {
    return head;
  }
}