// 如果每个元素都符合测试函数，返回 true, 否则返回 false

const arr = [1, 2, 3, 4, 5];

// true
console.log(arr.every((v) => {
  return v < 10;
}));


// 如果元素中至少有一个符合测试函数，则返回 true ，否则返回 false

const arr2 = [1, 2, 3, 4, 5];

// true
console.log(arr2.some((v) => {
  return v >= 5;
}));