console.log(NaN === NaN) // false
console.log(NaN == NaN) // false
console.log(isNaN(NaN)) // true


// ployfil
function isNaN (v) {
  return v !== v;
}

console.log(isNaN(NaN)) // true

// 只能用 isNaN 或者 v !== v 这种方式来判断是不是 NaN
