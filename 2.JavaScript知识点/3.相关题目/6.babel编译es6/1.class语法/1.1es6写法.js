class Parent {
  static NAME = 'parent';
  constructor(a) {
    this.a = a;
  }

  x() {
    console.log(this.a)
  }
}

class Child extends Parent {
  static NAME = 'child';
  static say() {
    console.log('here')
  }
  constructor(a, b) {
    super(a);
    this.b = b;
  }

  y() {
    console.log(this.b)
  }
}