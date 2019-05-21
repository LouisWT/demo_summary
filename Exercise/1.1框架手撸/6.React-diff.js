// oldList 和 newList 是 key 组成的数组
function diff(oldList, newList) {
  let changes = [];
  let lastOldIndex = 0;
  let lastNode = null;
  // 先遍历新列表
  newList.forEach((item) => {
    // 在旧列表中找
    let oldIndex = oldList.indexOf(item);
    if (oldIndex === -1) {
      changes.push({
        type: 'insert',
        node: item,
        afterNode: lastNode,
      })
    }
    // 只将前面的元素往后移
    else if (oldIndex < lastOldIndex) {
      changes.push({
        type: 'move',
        node: item,
        afterNode: lastNode,
      })
    }
    // 更新 lastOldIndex lastNode
    lastOldIndex = Math.max(oldIndex, lastOldIndex);
    lastNode = item;
  });

  oldList.forEach((item) => {
    let newIndex = newList.indexOf(item);
    if (newIndex === -1) {
      changes.push({
        type: 'remove',
        node: item
      })
    }
  })
  return changes;
}

console.log(diff([1, 2, 3, 7, 4], [1, 4, 5, 3, 7, 6]))
console.log(diff(['A', 'B', 'C', 'D'], ['B', 'E', 'C', 'A']))
console.log(diff(['A', 'B', 'C', 'D'], ['D', 'A', 'B', 'C']))

var showSteps = function (changes) {
  // 留一份，针对 移 用来查以前的位置
  var _oldList = oldList.slice();
  // 针对 增 移 和 删，模拟DOM操作需要知道patching中，旧元素的当前index
  // 实际做DOM patch的时候不需要，因为找到元素后DOM API不需要index就能 增 移 删
  var patchingIndex = -1;
  changes.forEach(function (change) {
    switch (change.type) {
      case 'insert':
        console.log('insert ' + change.item + ' after ' + change.afterNode);
        patchingIndex = oldList.indexOf(change.afterNode);
        insertAfter(oldList, change.item, patchingIndex);
        break;
      case 'remove':
        console.log('remove ' + _oldList[change.index]);
        patchingIndex = oldList.indexOf(_oldList[change.index]);
        oldList.splice(patchingIndex, 1);
        break;
      case 'move':
        console.log('move ' + change.item + ' to pos after ' + change.afterNode);
        patchingIndex = oldList.indexOf(change.afterNode);
        move(oldList, oldList.indexOf(change.item), patchingIndex);
        break;
      default:
        cosole.error('not here');
        break;
    }
    console.log(oldList);
  });
};
var move = function (list, from, to) {
  var item = list.splice(from, 1);
  if (from > to)
    list.splice(to + 1, 0, item[0]);
  else
    list.splice(to, 0, item[0]);
};
var insertAfter = function (list, item, index) {
  list.splice(index + 1, 0, item);
};


