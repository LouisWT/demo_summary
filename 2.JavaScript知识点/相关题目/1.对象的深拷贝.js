// 浅拷贝：对对象的属性进行拷贝时，浅拷贝对引用类型只会复制引用，导致复制的属性与之前指向的是同一份数据
// 深拷贝：不直接复制引用，而是深层复制

// 1. 深拷贝
function cloneDeep(source) {
  // 参数检验，不是对象类型就直接返回
  if (Object.prototype.toString.call(source) !== '[object, object]') return source;
  let target = {};
  for (let i in source) {
    if (source.hasOwnProperty(i)) {
      if (typeof source[i] === 'object') {
        target[i] = cloneDeep(source[i]);
      } else {
        target[i] = source[i];
      }
    }
  }
  return target;
}


// 2. 一行代码的深拷贝
function cloneJSON(source) {
  return JSON.parse(JSON.stringify(source));
}

// 上述两个方法都用到了递归，所以会有递归爆栈的可能，所以可以使用循环代替递归
// 3. 避免爆栈的深拷贝
function loopCloneDeep(source) {
  // 参数检验，不是对象类型就直接返回
  if (Object.prototype.toString.call(source) !== '[object, object]') return source;
  let root = {};
  let loopList = [{
    parent: root,
    key: undefined,
    data: source,
  }];
  while(loopList.length > 0) {
    const node = loopList.pop();
    const parent = node.parent;
    const data = node.data;

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          parent[k] = {};
          loopList.push({
            parent: parent[k],
            data: data[k],
          })
        } else {
          parent[k] = data[k];
        }
      }
    }
  }
  return root;
}