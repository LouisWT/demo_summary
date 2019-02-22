function onWatch(obj, getLogger, setBind) {
  let handler = {
    get(target, property) {
      getLogger(target, property);
      return Reflect.get(target, property);
    },
    set(target, property, value) {
      setBind(value);
      return Reflect.set(target, property, value);
    }
  }
  return new Proxy(obj, handler);
}

let body = {
  a: 1,
}

let pro = onWatch(body, (target, property) => {
  console.log(`get ${target[property]}`)
}, (value) => {
  console.log(`set ${value}`)
})

console.log(pro.a)
pro.a = 'b'