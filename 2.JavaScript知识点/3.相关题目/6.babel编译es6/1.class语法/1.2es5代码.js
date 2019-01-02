"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
      typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Parent = (function () {
  function Parent(a) {
    // 1. 检查是否是构造函数调用，也就是说只能用 new 方法来调用，而不能将类当做函数使用
    _classCallCheck(this, Parent);
    // 2. 私有属性初始化
    this.a = a;
  }

  // 3. 定义父类原型方法与父类静态方法，就是在 Parent.prototype 上定义原型方法，在 Parent 上定义静态方法，之所以要使用 Object.defineProperty 来定义，是因为要让方法不可枚举
  _createClass(Parent, [
    {
      key: "x",
      value: function x() {
        console.log(this.a);
      }
    }
  ], [
    {
      key: "say",
      value: function say() {
        console.log("here");
      }
    }
  ]);

  return Parent;
})();

// 4. 静态属性直接在 Parent 上定义
Parent.NAME = "parent";

var Child = (function (_Parent) {
  // 5. 使用 Object.create 来实现父类原型方法的继承
  _inherits(Child, _Parent);

  function Child(a, b) {
    _classCallCheck(this, Child);
    // 6. 定义子类的静态方法
    _createClass(Child, null, [
      {
        key: "say",
        value: function say() {
          console.log("here");
        }
      }
    ]);

    var _this = _possibleConstructorReturn(
      this,
      (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, a)
    );
    // 7. 定义子类属性
    _this.b = b;
    return _this;
  }
  // 8. 定义子类原型方法
  _createClass(Child, [
    {
      key: "y",
      value: function y() {
        console.log(this.b);
      }
    }
  ]);

  return Child;
})(Parent);
// 9. 子类的静态属性
Child.NAME = "child";
