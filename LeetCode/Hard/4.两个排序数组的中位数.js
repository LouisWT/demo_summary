// 直接找中位数，时间复杂度 o(m+n)
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let total = m + n
  let mid
  if (total % 2 === 1) mid = Math.floor(total / 2)
  else mid = Math.floor(total / 2) - 1
  let count = 0
  let i = 0
  let j = 0
  let res = 0;
  while (count <= mid) {
    let tmp;
    if (i >= m) {
      tmp = nums2[j]
      j++
    } else if (j >= n) {
      tmp = nums1[i]
      i++
    } else if (nums1[i] < nums2[j]) {
      tmp = nums1[i]
      i++
    } else {
      tmp = nums2[j]
      j++
    }
    if (count === mid) {
      if (total % 2 === 1) {
        res = tmp
      } else {
        let tmp2
        if (i >= m) {
          tmp2 = nums2[j]
        } else if (j >= n) {
          tmp2 = nums1[i]
        } else if (nums1[i] < nums2[j]) {
          tmp2 = nums1[i]
        } else {
          tmp2 = nums2[j]
        }
        res = (tmp + tmp2) / 2
      }
      break
    }
    count++
  }
  return res
};

// let num1 = [1, 2]
// let num2 = [3, 4]
// findMedianSortedArrays(num1, num2)

// https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2481/Share-my-O(log(min(mn))-solution-with-explanation
// 中位数就是找一个数可以将这个序列划分为左右元素个数相等
// 假设序列1的位置 i 处,序列2的位置 j 处划分
// 那么序列1 左边的元素个数为 i,右边元素个数为 m - i,序列2坐标的元素个数为 j,右边的元素个数为 n - j
// 如果 i + j == m - i + n - j 并且左边序列的最大值小于右边序列的最小值,那么就能得到序列的中位数
// 通过上面的公式,就可以整理出已知 i , j 的位置公式 j = (m + n) / 2 - i
// 由于 m + n 可能是奇数长度,此时就会有问题,所以 j = Math.floor((m + n + 1) / 2) - i
// 这样,如果是偶数长度,由于 Math.floor,结果与上面一样
// 如果是奇数长度,那么会将左半边的长度划分得更长,这样中位数就在左边
function findMedianSortedArrays(tmp1, tmp2) {
  let nums1 = tmp1.length < tmp2.length ? tmp1 : tmp2;
  let nums2 = tmp1.length < tmp2.length ? tmp2 : tmp1;
  let m = nums1.length;
  let n = nums2.length;
  let lo = 0;
  let hi = m;
  let i;
  let j;
  while (lo <= hi) {
    i = Math.floor((lo + hi) / 2);
    // 这个公式是关键
    j = Math.floor((m + n + 1) / 2) - i;
    // 如果序列2左边最大值大于序列1右边的最小值,说明序列1应当更大一点,所以增加 lo
    // 反之序列1应当更小一点, 减小 hi
    if (j > 0 && i < m && nums2[j - 1] > nums1[i]) {
      lo = i + 1;
    } else if (i > 0 && j < n && nums1[i - 1] > nums2[j]) {
      hi = i - 1;
    } else {
      break;
    }
  }
  let maxLeft;
  if (i == 0) maxLeft = nums2[j - 1];
  else if (j == 0) maxLeft = nums1[i - 1];
  else maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);

  if ((m + n) % 2 === 1) {
    return maxLeft
  }

  let minRight;
  if (i == m) minRight = nums2[j];
  else if (j == n) minRight = nums1[i];
  else minRight = Math.min(nums1[i], nums2[j]);

  return (maxLeft + minRight) / 2;
}
