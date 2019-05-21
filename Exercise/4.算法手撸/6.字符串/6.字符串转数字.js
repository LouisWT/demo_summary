function atoi(str) {
  if (!str) return 0;
  // 将首尾的空格去除
  str = str.trim()
  let sign = 0;
  let value = 0;
  let i = 0;
  if (str[0] === '-' || str[0] === '+') {
    sign = str[0] === '-' ? 1 : 0;
    str = str.slice(1);
  }
  while (i < str.length) {
    // 如果在 0~9之间
    if (str[i] >= '0' && str[i]<= '9') {
      // 如果值将大于最大值，直接返回
      if (value * 10 + Number(str[i]) >= 2 ** 31) {
        value = sign === 1 ? - (2 ** 31) :( 2 ** 31 - 1);
        return value;
      }
      value = value * 10 + Number(str[i]);
    } else {
      break;
    }
    i++;
  }
  if (sign === 1 && value !== 0) {
    value = -value;
  }
  return value; 
}

console.log(atoi(' -3 '))
console.log(atoi('42'))
console.log(atoi('     -42'))
console.log(atoi('4193 with words'))
console.log(atoi('words and 987'))
console.log(atoi('-91283472332'))
console.log(atoi('-2147483646'))
console.log(atoi('2147483648'))