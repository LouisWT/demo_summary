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