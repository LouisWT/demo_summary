// 由于它底层对小数组是使用插入排序的，这样其实并不能保证真正随机打乱
function oldShuffle(arr) {
  return arr.sort(() => {
    return Math.random() - 0.5;
  })
}

function shuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    // 0<= j <= i 
    let j = Math.floor(Math.random() * (i + 1))
    swap(arr, i, j);
  }
  return arr;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

