// p82
// 数组的旋转，把数组的最开始的若干个元素搬到数组的末尾，称为旋转
// 输入一个递增排序数组的旋转，输出旋转数组的最小元素

// 对一个相对有序的数组进行查找，可以考虑二分查找

const arr1 = [3, 4, 5, 1, 2];
const arr2 = [1, 1, 1, 1, 1];
const arr3 = [1, 2, 3, 1, 1];
const arr4 = [1, 2, 3, 4, 5];


function findMin(arr) {
    if (!arr) { return; }
    const length = arr.length;
    // index1 试图指向第一个有序数组最大的数
    let index1 = 0;
    // index2 试图指向第二个有序数组最小的数
    let index2 = length - 1;
    // 如果没有进行旋转，那么就返回第一个元素
    let indexMid = index1;

    while (arr[index1] >= arr[index2]) {
        // 两个 index 相邻，说明 index2 就是第二个数组最小的数，也就是最小的数
        if (index1 + 1 == index2) {
            indexMid = index2;
            break;
        }
        // 二分查找
        indexMid = Math.floor((index2 + index1) / 2);

        // 如果中间的数大于等于起始的数，那么它属于第一个数组，更新 index1
        if (arr[index1] <= arr[indexMid]) {
            index1 = indexMid;
        }
        // 如果中间的数小于等于末尾的数，那么它属于第二个数组，更新 index2
        else if (arr[indexMid] <= arr[index2]) {
            index2 = indexMid;
        }
    }
    return arr[indexMid];
}

console.log(findMin(arr1));
console.log(findMin(arr2));
console.log(findMin(arr3));
console.log(findMin(arr4));
console.log(findMin(null));

