// p231 **
// 0 - a, 1 - b, ... 25 - z，按这个规则翻译数字序列，数字序列可能有多种翻译方式，计算一个数字有多少种不同的翻译方式。

function getTranslationCount(number) {
  if (number < 0 ) return 0;
  return translationCount(number.toString());
}

// 从第i 位开始的不同翻译的数目
// f(i) = f(i + 1) + g(i, i + 1) * f(i + 2)
function translationCount(numStr) {
  let counts = new Array(numStr.length);
  for (let i = numStr.length - 1; i >= 0; i--) {
    let count = 0;
    if (i == numStr.length - 1) {
      count = 1;
    } else {
      count = counts[i + 1];
    }
    // 最后一个数字不做验证
    if (i < numStr.length - 1) {
      let a = numStr[i];
      let b = numStr[i + 1];
      let temp = Number(a) * 10 + Number(b);
      if (temp >= 10 && temp <= 25) {
        // 如果是倒数第二个数字，并且符合要求，那就加1
        if (i === numStr.length - 2) {
          count += 1;
        } else {
          count += counts[i + 2];
        }
      }
    }
    counts[i] = count;
  }
  return counts[0];
}

function translate(str, i = 0) {
  if (!str || i >= str.length) return 0;
  let num1 = translate(str, i + 1);
  let num2 = 0;
  if (i + 1 < str.length) {
    let num = parseInt(str[i] + str[i+1]);
    if (num >= 0 && num <= 25) {
      num2 = translate(str, i + 2);
    }
  }
  return num1 + num2;
}

console.log(getTranslationCount(12258));