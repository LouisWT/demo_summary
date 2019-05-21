let mo = (function (num) {
  let data = 1;
  return {
    fn() {
      return data + num; 
    }
  }
})(2)

console.log(mo.fn())
console.log(mo.data);