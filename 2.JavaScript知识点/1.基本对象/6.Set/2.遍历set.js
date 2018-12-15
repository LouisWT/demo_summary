var mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

// foobar
// 1
// baz
for (let k of mySet) {
  console.log(k);
}

// foobar
// 1
// baz
for (let [key, sameKey] of mySet.entries()) {
  console.log(key);
}

// foobar
// 1
// baz
for (let k of mySet.keys()) {
  console.log(k);
}

// foobar
// 1
// baz
for (let k of mySet.values()) {
  console.log(k);
}

// foobar
// 1
// baz
mySet.forEach((v) => {
  console.log(v);
})