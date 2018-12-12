// p249
// 在数组中的两个数字，如果前面的一个数字大于后面的数字，则这两个数字组成一个逆序对。
// 注意是前面的数字大于后面的数字
// 比如 [7, 5, 6, 4] 逆序对有 75 76 74 65 64
// 没有 65，因为 5在6前面
// 输入一个数组。求出这个数组中的逆序对的总数。


function findPart(arr) {
  if (!arr) { return 0; }
  const temp = new Array(arr.length);
  let count = sort(arr, 0, arr.length - 1, temp);
  return count % 1000000007;
}

function sort(arr, lo, hi, temp) {
  if (lo >= hi) return 0;
  const mid = Math.floor((lo + hi) / 2);
  let count = 0;
  count += sort(arr, lo, mid, temp);
  count += sort(arr, mid + 1, hi, temp);
  count += merge(arr, lo, mid, hi, temp);
  return count;
}

function merge(arr, lo, mid, hi, temp) {
  for(let k = lo; k <= hi; k++) {
    temp[k] = arr[k];
  }
  let i = mid;
  let j = hi;
  let count = 0;
  // 倒着 merge 的归并排序
  for (let k = hi; k >= lo; k--) {
    if (i < lo) { arr[k] = temp[j--]; }
    else if (j < mid + 1) { arr[k] = temp[i--]; }
    else if (temp[i] <= temp[j]) {
      arr[k] = temp[j--];
    }
    else {
      arr[k] = temp[i--];
      // 只有前面的数大于后面的数才算作逆序对
      count += j - mid;
    }
  }
  return count;
}


let arr = [364,637,341,406,747,995,234,971,571,219,993,407,416,366,315,301,601,650,418,355,460,505,360,965,516,648,727,667,465,849,455,181,486,149,588,233,144,174,557,67,746,550,474,162,268,142,463,221,882,576,604,739,288,569,256,936,275,401,497,82,935,983,583,523,697,478,147,795,380,973,958,115,773,870,259,655,446,863,735,784,3,671,433,630,425,930,64,266,235,187,284,665,874,80,45,848,38,811,267,575];

console.log(findPart(arr));
console.log(arr);
