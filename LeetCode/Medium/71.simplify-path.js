/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  if (!path) return '';
  let res = [];
  let name = '';
  for (let i = 1; i < path.length; i++) {
    // 如果不是 /，那么将 name 叠加获取每一步的路径
    if (path[i] !== '/') {
      name += path[i];
      continue;
    }
    // 如果是 /，那么就对 name 的情况进行讨论
    switch(name) {
      case '':
        break;
      case '.':
        break;
      case '..': res.pop();
        break;
      default: res.push(name);
        break;
    }
    name = '';
  }
  // 路径末端的情况
  // 比如 /a/b/..
  switch(name) {
    case '':
      break;
    case '.':
      break;
    case '..': res.pop();
      break;
    default: res.push(name);
      break;
  }
  return '/' + res.join('/');
};

