if (Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('this is null');
    }
    var obj = Object(this);
    // 将 length转为 31位无符号整形
    // 正常来说是 32位，第一位表示符号
    // 1 >>> 0 === 1
    // 2 ** 32 >>> 0 === 0 (这是因为只获取后31位数)
    // -1 >>> 0 === 2 ** 32 - 1
    var len = obj.length >>> 0;
    if (len === 0) return -1;
    // 将字符串转为数字
    var n = +fromIndex || 0;
    if (Math.abs(n) === Infinity) {
      n = 0;
    }
    if (n >= len) return -1;

    var k;
    if (n >= 0) k = n;
    else k = Math.max(len + n, 0);
    
    while (k < len) {
      if (k in obj && obj[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  }
}