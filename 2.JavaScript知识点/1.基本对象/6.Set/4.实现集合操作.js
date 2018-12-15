// 是否为子集
function isSuperset(set, subset) {
  for (var elem of subset) {
      if (!set.has(elem)) {
          return false;
      }
  }
  return true;
}

// 返回并集
function union(setA, setB) {
  var _union = new Set(setA);
  for (var elem of setB) {
      _union.add(elem);
  }
  return _union;
}

// 返回交集
function intersection(setA, setB) {
  var _intersection = new Set();
  for (var elem of setB) {
      if (setA.has(elem)) {
          _intersection.add(elem);
      }
  }
  return _intersection;
}

// 差集
function difference(setA, setB) {
  var _difference = new Set(setA);
  for (var elem of setB) {
      _difference.delete(elem);
  }
  return _difference;
}

//Examples
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // => true
union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // => Set [3, 4]
difference(setA, setC); // => Set [1, 2]