// 判断属性的改变

function diffProps(oldProps, newProps) {
  // 遍历 oldProps 查看是否有删除的属性
  // 遍历 newProps 查看是否有属性值被修改
  // 查看是否有属性新增
  let change = []
  for (let key in oldProps) {
    if (oldProps.hasOwnProperty(key) && !newProps[key]) {
      // 删除的属性
      change.push({
        prop: key
      })
    }
  }
  for (let key in newProps) {
    if (newProps.hasOwnProperty(key)) {
      let props = newProps[key];
      if (oldProps[key] && oldProps[key] !== newProps[key]) {
        // 修改的属性
        change.push({
          prop: key,
          value: newProps[key]
        })
      } else if (!oldProps[key]) {
        change.push({
          prop: key,
          value: newProps[key]
        })
      }
    }
  }
  return change;
}

module.exports = diffProps;