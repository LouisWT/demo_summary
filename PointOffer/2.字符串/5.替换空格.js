// p 51
// 将空格替换为 %20

let string = 'we are happy';

function replace(str) {
  if (!str) return '';
  // return str.replace(' ', '%20');
  // 使用上面的不行，要用正则加上全局替换 g ，才可以替换所有的空格
  return str.replace(/ /g, '%20');
}

console.log(replace(string));