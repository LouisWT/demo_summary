// 1. 深度优先遍历
function DFS(element, depth) {
  if (!element) return;
  console.log(element.nodeName, element.className, depth);
  let children = element.children;
  for (let i = 0; i < children.length; i++) {
    DFS(children[i], depth + 1);
  }
}
let root = document.getElementsByClassName('root')[0];
deepTravel(root, 1);

// 2. 广度优先遍历
function BFS(element) {
  if (!element) return;
  let quene = [[element]];
  // 当前层级
  let depth = 0;
  while (quene[depth]) {
    let nodes = quene[depth];
    let node;
    if (nodes.length == 0) {
      depth++;
      continue;
    } else {
      node = nodes.shift();
    }
    console.log(node.nodeName, node.className, depth + 1);
    let children = node.children;
    if (quene[depth + 1]) {
      quene[depth + 1] = quene[depth + 1].concat(Array.from(children));
    } else {
      quene[depth + 1] = Array.from(children);
    }
  }
}