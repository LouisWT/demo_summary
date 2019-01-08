// insert 插入节点
// search 查找节点
// remove 删除节点，关键是删除节点需要分类讨论
function BinarySearchTree() {
  let Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  let root = null;

  function insertNode(node, newNode) {
    if (node.key > newNode.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    }
    if (node.key <= newNode.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }

  this.insert = function (key) {
    let node = new Node(key);
    if (!root) {
      root = node;
    } else {
      insertNode(root, node);
    }
  }

  function searchNode(node, key) {
    if (!node) return false;
    if (key < node.key) {
      return searchNode(node.left);
    }
    if (key > node.key) {
      return searchNode(node.right);
    }
    if (key == node.key) {
      return true;
    }
  }

  this.search = function (key) {
    return searchNode(root, key);
  }

  function minSearch(node) {
    if (node.left) {
      return minSearch(node.left);
    } else {
      return node.key;
    }
  }

  this.min = function () {
    return minSearch(root);
  }

  function removeNode(node, key) {
    if (!node) return null;
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    }
    if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    }
    if (key == node.key) {
      // 移除叶子节点
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // 移除只有一个子节点
      if (node.left !== null) {
        node = node.left;
        return node;
      } else if (node.right !== null) {
        node = node.right;
        return node;
      }
      // 有两个子节点
      // 找到右子树的最小节点
      let minNode = minSearch(node.right);
      // 将右子树的最小节点放到当前节点
      node.key = minNode.key;
      // 删除右子树的最小节点
      node.right = removeNode(node.right, minNode.key);
      return node;
    }
  }

  this.remove = function (key) {
    root = removeNode(root, key);
  }
}