/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  arr1 = num1.split('');
  arr2 = num2.split('');
  // 保存每次乘积的结果
  let mulRes = [];
  // 从低位到高位做乘法
  for (let i = arr1.length - 1; i >= 0; i--) {
    for (let j = arr2.length - 1; j >= 0; j--) {
      let tmp = arr1[i] * arr2[j];
      // 结果从低到高保存
      let index1 = arr1.length - 1 - i;
      let index2 = arr2.length - 1 - j;
      sum(mulRes, tmp, index1 + index2);
    }
  }
  return mulRes.reverse().join('');
};

function sum(res, num, index) {
  // 一定要加括号，不然肯定不是你想要的结果
  num = num + (res[index] || 0);
  if (num < 10) return res[index] = num;
  let lo = num % 10;
  res[index] = lo;
  return sum(res, (num - lo) / 10, index + 1);
}
