// append 加入节点
// insert 在指定位置添加
// remove 删除指定元素
// removeAt 删除指定位置
// indexOf 返回索引
// size 返回length
// getHead 返回头节点
function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };
  let length = 0;
  let head = null;
  
  this.append = function (element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let current = head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
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
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = node;
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
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
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