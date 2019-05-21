let map = new Map();
class MyJSON {
  static parse(str) {
    return eval(`(${str})`);
  }
  static stringify(obj) {
    // null 类型
    if (obj === null) {
      return 'null';
    }
    // 基本类型
    // 忽略 Symbol
    switch (typeof obj) {
      case 'number':
      case 'boolean':
        return obj.toString();
      case 'string':
        return `"${obj.toString()}"`;
      case 'undefined':
      case 'function':
        return undefined;
    }
    // 引用类型
    switch (Object.prototype.toString.call(obj)) {
      case '[object Number]':
      case '[object Boolean]':
        return obj.toString();
      case '[object String]':
        return `"${obj.toString()}"`;

      case '[object Date]':
        return `"${obj.toJSON()}"`;
      case '[object RegExp]':
        return '{}';

      case '[object Array]': {
        if (map.get(obj)) throw new Error('TypeError: Converting circular structure to JSON');
        map.set(obj, 1);
        let tmp = [];
        Object.keys(obj).forEach((k) => {
          let curr = MyJSON.stringify(obj[k]);
          tmp.push(curr === undefined ? 'null' : curr);
        })
        return `[${tmp.join(',')}]`;
      }
      case '[object Object]': {
        if (map.get(obj))  throw new Error('TypeError: Converting circular structure to JSON');
        map.set(obj, 1);
        let tmp = [];
        Object.keys(obj).forEach((k) => {
          let curr = MyJSON.stringify(obj[k]);
          if (curr !== undefined) {
            tmp.push(`"${k}":${curr}`)
          }
        })
        return `{${tmp.join(',')}}`;
      }
    }
  }
}

let a = {
  a: 1,
  b: 'b',
  c: true,
  d: null,
  e: undefined,
  f: Symbol.for('f'),
  g: function() {},
  h: new String('123'),
  i: new Number(2),
  j: Boolean(''),
  k: new Date(),
  l: /^\/api\/v1/,
  m: [],
  n: {
    o: 1,
    p: 2,
  }
}


let str1= MyJSON.stringify(a);
console.log(str1 === JSON.stringify(a))
console.log(MyJSON.parse(str1))