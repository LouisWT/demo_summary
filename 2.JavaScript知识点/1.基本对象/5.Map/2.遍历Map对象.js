var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

// 0 = zero
// 1 = one
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}

// 0
// 1
for (var key of myMap.keys()) {
  console.log(key);
}

// zero
// one
for (var value of myMap.values()) {
  console.log(value);
}

// 0 = zero
// 1 = one
for (var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}

// 0 = zero
// 1 = one
myMap.forEach((value, key, map) => {
  console.log(key + " = " + value);
})