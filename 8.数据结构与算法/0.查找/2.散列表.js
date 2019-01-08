// 字典类
function Dictionary() {
  let items = {};
  this.set = function (key, value) {
    items[key] = value;
  }
  this.remove = function (key) {
    if (items.hasOwnProperty(key)) {
      delete items[key];
      return true;
    }
    return false;
  }
  this.has = function (key) {
    return items.hasOwnProperty(key);
  }
  this.get = function (key) {
    return items[key];
  }
  this.clear = function () {
    items = {};
  }
  this.size = function () {
    return Object.keys(items).length;
  }
  this.keys = function () {
    return Object.keys(items);
  }
  this.values = function () {
    return Object.values(items);
  }
  this.each = function (fn) {
    for (let [key, value] of Object.entries()) {
      fn(key, value);
    }
  }
}

// hashMap 类
function HashTable() {
  let table = [];
  // 散列函数
  let loseHashCode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 1013;
  }
  // 高端一点的散列函数
  let djb2HashCode = function (key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
  }
  let hashCode = function (key) {
    return loseHashCode(key);
    // return djb2HashCode(key);
  }
  this.put = function (key, value) {
    let position = hashCode(key);
    table[position] = value;
  }
  this.get = function (key) {
    return table[hashCode(key)];
  }
  this.remove = function (key) {
    table[hashCode(key)] = undefined;
  }
}

// 处理散列表中的冲突
// 1. 分离链接，为散列表的每个位置创建一个链表并将元素存储在里面
function HashTableSeparateChaining() {
  var table = [];
  var ValuePair = function (key, value) { //新的辅助类来加入LinkedList实例的元素，用到之前的链表
    this.key = key;
    this.value = value;
    this.toString = function () {
      return '[' + this.key + ' - ' + this.value + ']';
    }
  };
  var loseloseHashCode = function (key) { //散列函数得出一个散列值key
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };
  var hashCode = function (key) {
    return loseloseHashCode(key);
  };
  this.put = function (key, value) {
    var position = hashCode(key);
    console.log(position + ' - ' + key);
    if (table[position] == undefined) { //判断是否被占据了
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value)); //LinkedList实例中添加一个ValuePair实例
  };
  this.get = function (key) {
    var position = hashCode(key);
    if (table[position] !== undefined && !table[position].isEmpty()) {
      var current = table[position].getHead();
      while (current.next) { //遍历链表来寻找键值
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      //检查元素在链表第一个或最后一个节点的情况
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  };
  this.remove = function (key) {
    var position = hashCode(key);
    if (table[position] !== undefined) {
      var current = table[position].getHead();
      while (current.next) { //遍历
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      //检查元素在链表第一个或最后一个节点的情况
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  };
  this.print = function () {
    for (var i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(table[i].toString());
      }
    }
  };
}

// 处理散列冲突
// 2. 线性探查，如果index 的位置被占据了，那么就看看 index + 1的位置，如果 index + 1 也被占据了，那么就试试 index + 2
function HashLinearProbing() {
  var table = [];
  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;
    this.toString = function () {
      return '[' + this.key + ' - ' + this.value + ']';
    }
  };
  var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };
  var hashCode = function (key) {
    return loseloseHashCode(key);
  };
  this.put = function (key, value) {
    var position = hashCode(key);
    console.log(position + ' - ' + key);
    if (table[position] == undefined) { //如果没有元素存在加入
      table[position] = new ValuePair(key, value);
    } else {
      var index = ++position;
      while (table[index] != undefined) { //有的话继续往后找，直到找到加入
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  };
  this.get = function (key) {
    var position = hashCode(key);
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) { //循环迭代
          index++;
        }
        if (table[index].key === key) { //验证key
          return table[index].value;
        }
      }
    }
    return undefined;
  };
  this.remove = function (key) {
    var position = hashCode(key);
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          table[index] = undefined;
        }
      }
    }
  };
  this.print = function () {
    for (var i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(i + ' -> ' + table[i].toString());
      }
    }
  };
}