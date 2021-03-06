let onWatch = (obj, getLogger, setBind) => {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property);
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      setBind(value);
      return Reflect.set(target, property, value, receiver);
    }
  }
  return new Proxy(obj, handler);
}

let data = {
  name: 'kind'
}

let value;
// 解析到 {{name}} 发生的事情
let p = onWatch(data,
  (target, property) => {
    console.log(`Get '${property}' = ${target[property]}`);
  },
  v => {
    console.log(`bind value to ${v}`);
    value = v
  })

p.name = 2;
console.log(p.name);