const Element = require('./1.使用JS模拟DOM');

function diff(oldDOMTree, newDOMTree) {
  // 用于记录差异
  let patches = {}
  dfs(oldDOMTree, newDOMTree, 0, patches)
  return patches;
}

function dfs(oldNode, newNode, index, patches) {
  let curPatches = [];
  // 1. 没有新节点，什么都不做
  // 2. 新节点的 tagName 和 key 和旧的不同，替换
  // 3. 新节点的 tagName 和 key(可能没有)和旧的相同，开始遍历子树
  if (!newNode) {

  } else if (newNode.tag === oldNode.tag && newNode.key === oldNode.key) {
    let props = diffProps(oldNode.props, newNode.props);
    if (props.length) {
      curPatches.push({
        type: 'ChangeProps', props
      })
    }
    diffChildren(oldNode.children, newNode.children, index, patches);
  } else {
    curPatches.push({ type: 'Replace', node: newNode })
  }

  if (curPatches.length) {
    if (patches[index]) {
      patches[index] = patches[index].concat(curPatches);
    } else {
      patches[index] = curPatches;
    }
  }
}