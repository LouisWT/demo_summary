/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */
/**
 * Initialize your data structure here.
 */

function Node(val) {
  // 当前节点是否的值
  this.val = val;
  // 当前节点的子节点
  this.children = [];
  // 从根节点到当前节点为止是否存在单词
  this.flag = false;
}

var Trie = function() {
  this.root = new Node('#');
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let children = this.root.children;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    // 是否在子节点中找到了需要的字符
    let flag = false;
    for (let child of children) {
      if (child.val === char) {
        // 如果是最后一个字符，那么需要将它的 flag 置为 true，表示存在这样一个单词
        if (i === word.length - 1) child.flag = true;
        flag = true;
        children = child.children;
      }
    }
    // 说明没找到
    if (!flag) {
      let node = new Node(char);
      // 如果是最后一个字符，那么需要将它的 flag 置为 true，表示存在这样一个单词
      if (i === word.length - 1) node.flag = true;
      children.push(node);
      children = node.children;
    }
  }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let children = this.root.children;
  for (let i = 0; i < word.length; i++) {
    let flag = false;
    for (let child of children) {
      if (child.val === word[i]) {
        // 如果是最后一个字符，那么不光需要匹配，还需要 flag 为 true
        if ((i === word.length - 1) && child.flag !== true) return false;
        flag = true;
        children = child.children;
        break;
      }
    }
    if (!flag) return false;
  }
  return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let children = this.root.children;
  for (let i = 0; i < prefix.length; i++) {
    let flag = false;
    for (let child of children) {
      if (child.val === prefix[i]) {
        flag = true;
        children = child.children;
        break;
      }
    }
    if (!flag) return false;
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

