// 散列冲突后，用链表保存冲突的值
class HashMap {
  constructor() {
    this.table = [];
    // 哈希表的大小一般是素数（除了1和它本身，没有其它因数），减少冲突的概率，让散列的结果更分散
    this.size = 37;
  }
  hashCode(key) {
    let code = 0;
    for (let i = 0; i < key.length; i++) {
      code += key.charCodeAt(i);
    }
    return code % this.size;
  }
  set(key, val) {
    let position = this.hashCode(key);
    if (!this.table[position]) {
      // 最好用链表
      this.table[position] = [];
    }
    this.table[position].push({ key, val });
  }
  get(key) {
    let position = this.hashCode(key);
    if (!this.table[position]) return undefined;
    for (let item of this.table[position]) {
      if (key === item.key) {
        return item.val;
      }
    }
    return undefined;
  }
  remove(key) {
    let position = this.hashCode(key);
    let bucket = this.table[position]
    if (!bucket) return false;
    for (let i = bucket.length - 1; i >= 0; i--) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
      }
    }
    return true;
  }
}

// 线性探查法，散列冲突后，查看 index + 1 index + 2的位置，直到有空
class HashMap {
  constructor() {
    this.table = [];
    this.size = 37;
  }
  hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
  set(key, val) {
    let pos = this.hashCode(key);
    if (!this.table[pos]) {
      this.table[pos] = {key, val};
    } else {
      let index = pos;
      while (this.table[index]) {
        index++;
      }
      this.table[index] = {key, val};
    }
  }
  get(key) {
    let pos = this.hashCode(key);
    let index = pos;
    while (index < this.table.length && !this.table[index] && this.table[index].key !== key) {
      index++;
    }
    if (this.table[index].key === key) {
      return this.table[index].val;
    }
    return undefined;
  }
  remove(key) {
    let pos = this.hashCode(key);
    let index = pos;
    while (index < this.table.length && !this.table[index] && this.table[index].key !== key) {
      index++;
    }
    if (this.table[index].key === key) {
      this.table[index] = undefined;
      return true;
    }
    return false;
  }
}