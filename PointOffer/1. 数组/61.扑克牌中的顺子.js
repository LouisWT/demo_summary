// 298
// 抽五张牌，判断是不是顺子，2~10是数字本身，A为1，J为11，Q为12，K为13，大小王是任意数字

function IsContinuous(numbers) {
  if (!numbers || numbers.length < 5) return false;
  // 有多少个0
  let zeroCount = 0;
  // 除了0以外的元素
  const except0 = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      except0.push(numbers[i]);
    } else {
      zeroCount++;
    }
  }
  // 对除了0以外的数字进行排序
  except0.sort();
  const format = [];
  let flag = true;
  // 插入到第几个值
  let j = 0;
  while (j < except0.length) {
    // 如果下一个值不符合递增
    if (except0[j] !== except0[0] + format.length) {
      // 有0就用0补上去
      if (zeroCount > 0) {
        format.push(except0[0] + format.length);
        zeroCount--;
      }
      // 没0说明不是顺子
      else {
        flag = false;
        break;
      }
    }
    // 符合递增就把当前值插进去
    else {
      format.push(except0[j]);
      j++;
    }
  }
  return flag;
}

console.log(IsContinuous([1, 3, 0, 7, 0]))