// 浅拷贝：对对象的属性进行拷贝时，浅拷贝对引用类型只会复制引用，导致复制的属性与之前指向的是同一份数据
// 深拷贝：不直接复制引用，而是深层复制

// https://juejin.im/post/5bc1ae9be51d450e8b140b0c

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
  // 第一个 object小写，第二个大写
  if (Object.prototype.toString.call(source) !== '[object Object]') return source;
  let root = {};
  let loopList = [{
    parent: root,
    data: source
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
            data: data[k]
          })
        } else {
          parent[k] = data[k];
        }
      }
    }
  }
  return root;
}

const obj = {
  a: 1,
  b: {
    c: 2
  },
  c: {
    d: {
      e: 3,
    }
  }
};

console.log('cloneDeep-----')
const target = loopCloneDeep(obj);
console.log(target);
console.log(target === obj);

// 上面的方法都有引用丢失的问题，比如对象的两个属性是一个相同引用，但是在克隆之后，两个属性是独立的
// 4. 保存已经插入的节点，如果有相同引用，就不插入新节点

function cloneForce(source) {
  if (Object.prototype.toString.call(source) !== '[object Object]') return source;
  let root = {};
  let loopList = [{
    parent: root,
    data: source
  }];
  const uniqueList = [];

  while(loopList.length > 0) {
    const node = loopList.pop();
    const parent = node.parent;
    const data = node.data;

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          const existNode = findNode(uniqueList, data[k]);
          if (existNode !== null) {
            parent[k] = existNode.target;
          } else {
            parent[k] = {};
            loopList.push({
              parent: parent[k],
              data: data[k]
            })
            uniqueList.push({
              source: data[k],
              target: parent[k]
            })
          }
        } else {
          parent[k] = data[k];
        }
      }
    }
  }
  return root;
}

function findNode(list, node) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].source === node) {
      return list[i];
    }
  }
  return null;
}

const a = {
  b: 1,
  c: {
    d: 2
  }
};

const obj2 = {
  a: a,
  node2: {
    i: 2,
    a: a
  }
}

console.log('cloneForce-----')
const cloneObj2 = cloneForce(obj2);
console.log(cloneObj2);
console.log(cloneObj2 === obj2);
console.log(cloneObj2.a === cloneObj2.node2.a)