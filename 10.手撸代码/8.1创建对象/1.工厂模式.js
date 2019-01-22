function createPerson(name, age, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name);
  };
  return o;
}

let person1 = createPerson('Fred', 23, 'Student');

// 缺点：无法解决对象的识别问题，即不知道这个对象是哪个类的