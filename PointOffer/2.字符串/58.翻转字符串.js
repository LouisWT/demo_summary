// p284
// 翻转单词顺序
// 输入一个英文句子，翻转句子中的单词的顺序，但单词内字符的顺序不变

function reverseWord(str) {
  if (!str) return '';
  const strArr = str.split(' ');
  strArr.reverse();
  return strArr.join(' ');
}

console.log(reverseWord('i am a student.'));