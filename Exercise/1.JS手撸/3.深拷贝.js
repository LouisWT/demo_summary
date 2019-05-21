function deepCopy(obj) {
  let type = Object.prototype.toString.call(obj);
  if (type !== '[object Object]' && type !== '[object Array]') {
    return obj;
  }
  let res = obj instanceof Array ? [] : {};
  // 复制自有可枚举属性
  Object.keys(obj).forEach((key) => {
    res[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
  })
  // 复制 Symbol 为键的属性
  Object.getOwnPropertySymbols(obj).forEach((key) => {
    res[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
  })
  return res;
}

let map = new Map();
function deepCopy2(obj) {
  let type = Object.prototype.toString.call(obj);
  if (type !== '[object Object]' && type !== '[object Array]') {
    return obj;
  }
  let res = obj instanceof Array ? [] : {};

  let exist = map.get(obj)
  if (exist) return exist;
  exist.set(obj, res)

  // 复制自有可枚举属性
  Object.keys(obj).forEach((key) => {
    res[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
  })
  // 复制 Symbol 为键的属性
  Object.getOwnPropertySymbols(obj).forEach((key) => {
    res[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
  })
  return res;
}

function deepCopy3(obj) {
  let type = Object.prototype.toString.call(obj);
  if (type !== '[object Object]' && type !== '[object Array]') {
    return obj;
  }
  let res = obj instanceof Array ? [] : {};

  let map = new Map();
  map.set(obj, res)
  
  let root = [{
    target: res,
    source: obj
  }]
  while (root.length > 0) {
    let {target, source} = root.pop();
    Object.keys(source).forEach((key) => {
      if (typeof source[key] != 'object') {
        target[key] = source[key]
      } else {
        let res = source[key] instanceof Array ? [] : {};

        let tmp = map.get(source[key])
        if (tmp) return target[key] = tmp;
        map.set(source[key], res);
        
        target[key] = res;
        root.push({
          target: res,
          source: source[key]
        })
      }
    })
  }
  return res;
}

let map = new Map();
function deepCopy3 (obj) {
  let type = Object.prototype.toString.call(obj);
  if (type !== '[object Object]' || type !== '[object Array]') return obj;
  let res = obj instanceof Array ? [] : {};
  map.set(obj, res);
  let quene = [{
    source: obj,
    target: res,
  }];
  while (quene.length > 0) {
    let { source, target } = quene.shift();
    Object.keys(source).forEach((k) => {
      if (typeof source[k] !== 'object') {
        target[k] = source[k];
      } else {
        let exist = map.get(source[k]);
        if (exist) return target[k] = exist;
        let res = source[k] instanceof Array ? [] : {};
        map.set(source[k], target[k]);
        target[k] = res;
        quene.push({
          source: source[k],
          target: target[k],
        });
      }
    })
  }
}

// 浅拷贝
let obj1 = {...obj};
obj1 = Object.assign({}, obj);

// 对象深拷贝
// 不能拷贝函数和Undefined，Symbol作为键值也不行，不能处理循环引用。
let obj2 = JSON.parse(JSON.stringify(obj));

// 使用了递归，有爆栈的风险
let map = new Map();
function deepCopy(obj) {
  let type = Object.prototype.toString.call(obj);
  if (type !== '[object Object]' || type !== '[object Array]') {
    return obj;
  }

  let res = obj instanceof Array ? [] : {};
  let exist = map.get(obj);
  if (exist) return exist;
  map.set(obj, res);

  Object.keys(obj).forEach((k) => {
    res[k] = typeof obj[k] === 'object' ? deepCopy(obj[k]) : obj[k];
  })
  return res;
}
// Object.keys 获取对象的自有可枚举属性的键
// Object.getOwnPropertyNames 对象的自有可枚举和不可枚举属性的键值
// Object.getOwnPropertySymbols 获取对象的自有Symbol类型的键，不论是否可以枚举
// for ... in  原型链上的所有可枚举属性

function loopCopy(obj) {
  let type = Object.prototype.toString.call(obj);
  if (type !== '[object Object]' || type !== '[object Array]') {
    return obj;
  }
  let map = new Map();
  let res = obj instanceof Array ? [] : {};
  map.set(obj, res);
  let quene = [{
    source: obj,
    target: res,
  }]
  while (quene.length > 0) {
    let { source, target } = quene.shift();
    Object.keys(source).forEach((k) => {
      if (typeof source[k] === 'object') {
        let exist = map.get(source[k])
        if (exist) {
          target[k] = exist;
          return;
        }
        let tmp = source[k] instanceof Array ? [] : {};
        target[k] = tmp;
        map.set(source[k], tmp);
        quene.push({
          source: source[k],
          target: tmp,
        })
      } else {
        target[k] = source[k];
      }
    })
  }
  return res;
}
