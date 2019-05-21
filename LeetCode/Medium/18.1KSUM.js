// 这是受 4SUM 和 3SUM 的启发，得到的普遍规律
function fourSum(nums, target) {
  // 先得排序
  nums = nums.sort((a, b) => a > b ? 1 : -1)
  return KSum(nums, target, 4, 0);
}

function KSum(nums, target, k, index) {
  if (k < 2) return nums.filter(v => v === target);
  if (k === 2) {
    return TwoSum(nums, target, index);
  } else {
    let res = [];
    for (let i = index; i + k - 1 < nums.length; i++) {
      // 避免重复
      if (i > index && nums[i] === nums[i - 1]) continue;
      // 从 i - 1开始将 kSUM 转换为 k-1 SUM，并且 target 减小
      let tmp = KSum(nums, target - nums[i], k - 1, i + 1);
      for (arr of tmp) {
        arr.splice(0, 0, nums[i]);
      }
      res = res.concat(tmp);
    }
    return res;
  }
}

function TwoSum(nums, target, index) {
  let i = index;
  let j = nums.length - 1;
  let res = [];
  while (i < j) {
    if (nums[i] + nums[j] === target) {
      res.push([nums[i], nums[j]]);
      while (i < j && nums[i] === nums[i + 1]) i++;
      while (i < j && nums[j] === nums[j - 1]) j--;
      i++;
      j--;
    } else if (nums[i] + nums[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return res;
}