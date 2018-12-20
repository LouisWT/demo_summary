// 请使用一个固定长度的数组实现 3 个独立的栈，这三个栈都可以独立使用。要求除了这个数组之外只使用 O(1) 的空间，并且数组的空间利用率在各种情况下都应该尽可能的高。

let stack0 = 0;
let stack1 = 0;
let stack2 = 0;
function push(arr, stackId, elem) {
  if (!arr || stackId === undefined || elem === undefined) return;
  let index = 0;
  switch (stackId) {
    case 0: {
      index = stack0; stack0++; stack1++; stack2++;
    }
      break;
    case 1: {
      index = stack1; stack1++; stack2++;
    }
      break;
    case 2: {
      index = stack2; stack2++;
    }
      break;
    default: return;
  }
  arr.splice(index, 0, elem);

}

function pop(arr, stackId) {
  if (!arr || stackId === undefined) return arr;
  let index = 0;
  switch (stackId) {
    case 0: {
      index = stack0 - 1; stack0--; stack1--; stack2--;
    }
      break;
    case 1: {
      index = stack1 - 1; stack1--; stack2--;
    }
      break;
    case 2: {
      index = stack2 - 1; stack2--;
    }
      break;
    default: return;
  }
  const elem = arr.splice(index, 1);
  return elem[0];
}

const arr = [];

push(arr, 2, 7);
push(arr, 1, 4);
push(arr, 0, 1);
push(arr, 2, 8);
push(arr, 1, 5);
push(arr, 0, 2);

console.log(arr);
console.log(stack0);
console.log(stack1);
console.log(stack2);

console.log(pop(arr, 0))
console.log(pop(arr, 0))
console.log(pop(arr, 1))
console.log(pop(arr, 1))
console.log(pop(arr, 2))
console.log(pop(arr, 2))