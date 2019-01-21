const Element = require('./1.使用JS模拟DOM');

function getKeys(list) {
  let keys = []
  let text
  if (list) {
    list.forEach(item => {
      let key
      if (typeof item === 'string') {
        key = [item];
      } else if (item instanceof Element) {
        key = item.key;
      }
      keys.push(key);
    })
  }
  return keys;
}

function diffList(oldList, newList, index, patches) {
  let oldKeys = getKeys(oldKeys);
  let newKeys = getKeys(newList);
  let changes = [];

  let list = [];
  // 遍历旧列表，找出删除的项
  oldList &&
    oldList.forEach(item => {
      let key = item.key
      if (typeof item === 'string') {
        key = item;
      }
      let index = newKeys.indexOf(key);
      if (index === -1) {
        list.push(null);
      } else {
        list.push(key)
      }
    })
  let length = list.length;
  for (let i = length - 1; i >= 0; i--) {
    if (!list[i]) {
      list.splice(i, 1);
      changes.push({
        type: 'Remove',
        index: i
      })
    }
  }
  newList &&
    newList.forEach((item, i) => {
      let key = item.key;
      if (typeof item === 'string') {
        key = item;
      }
      let index = list.indexOf(key);
      if (index === -1 || key === null) {
        changes.push({
          type: 'Insert',
          node: item,
          index: i
        })
        list.splice(i, 0, key);
      } else {
        if (index !== i) {
          changes.push({
            type: 'Move',
            from: index,
            to: i
          })
          move(list, index, i);
        }
      }
    })
  return { changes, list };
}

function move(list, i, j) {
  let temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

function diffChildren(oldChild, newChild, index, patches) {
  let { changes, list } = diffList(oldChild, newChild, index, patches)
  if (changes.length) {
    if (patches[index]) {
      patches[index] = patches[index].concat(changes)
    } else {
      patches[index] = changes
    }
  }
  // 记录上一个遍历过的节点
  let last = null
  oldChild &&
    oldChild.forEach((item, i) => {
      let child = item && item.children
      if (child) {
        index =
          last && last.children ? index + last.children.length + 1 : index + 1
        let keyIndex = list.indexOf(item.key)
        let node = newChild[keyIndex]
        // 只遍历新旧中都存在的节点，其他新增或者删除的没必要遍历
        if (node) {
          dfs(item, node, index, patches)
        }
      } else index += 1
      last = item
    })
}

module.exports = diffChildren;