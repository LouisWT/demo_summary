### 试卷

1. 以下关于...rest参数说法错误的是: 
- A. 函数只能有一个...rest参数
- B. ...rest参数后允许再接其他参数
- C. 对象的方法不能有...rest参数
- D. rest参数不影响arguments对象，arguments反映的还是实际传参（长度，索引等)

2. 以下关于 weakset 说法错误的是
- A. 调用add方法时传递的必须是object数据类型
- B. 可以通过 for of 进行遍历
- C. 没有 keys 和 values 方法
- D. 没有 size 属性

3. 以下关于 Symbol 说法正确的是
- A. Symbol 不是基础数据类型(primative type)
- B. Symbol 数据类型可以转化为字符串或者数字
- C. 必须使用 new 关键字创建 Symbol 数据类型
- D. 以上说法全是错误

4. 关于 module 以下说法错误的是
- A. import 命令使用的是解构(Destructuring)语法
- B. 一个模块只能导出一个 default value
- C. 在引入defaut值和非default值时，default值必须放在前面

5. 以下关于super()方法说法正确的是
- A. 在使用this关键字之前必须调用super()方法
- B. 只能在子类中调用super()函数
- C. 如果你在子类中定义了构造函数，你必须调用super()方法
- D. 如果你没有指定构造函数，super()方法也会自动为你调用

6. 关于迭代器（iterator）以下说法正确的是
- A. `map[Symbol.iterator] === map.entries`结果返回 true
- B. 可以通过 Symbol.iterator 来访问变量的默认迭代器
- C. arrays 和 sets 默认的迭代器是 values
- D. weakmap 和 weakset 没有默认的迭代器

7. 下面代码不会报错的是
- A. Object.assign([1, 2, 3], [4, 5])
- B. var foo = 'bar'; var baz = { [foo] };
- C. map[Symbol.iterator] === map.entries
- D. let person = new class { //... }("Nicholas");

### 答案

1. BC。rest 参数必须是最后一个参数，并且只能有一个; 是不是对象的方法没有影响

2. B。WeakSet 只能保存 object 类型的值，而不能是其他几种基本类型; 它保存的是对象的弱引用,弱引用随时可能消失,所以不能被遍历; 同样它也没有 size 属性,以及用于遍历的 keys values 方法。

3. D。Symbol 是基础数据类型; Symbol 只能转为字符串,不能转为数字; 可以使用 Symbol.for() 创建Symbol数据类型

4. A。import 命令用的语法还不完全跟解构一样，尤其是命名别名的时候，只是说比较相似; BC 都是对的

5. BCD。只有在子类中使用 this 之前才必须调用 super() 方法,子类的构造函数必须执行一次super函数; 作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错; super 作为对象使用时表示父对象的原型对象。

6. ABCD。Map 的默认迭代器是 map.entries; arrays 和 sets 默认的迭代器是 values; weakmap 和 weakset 没有默认的迭代器; 可以使用 for ... of 对迭代器进行遍历。 for (let k of a.entries()) {...}

7. ACD。A 结果为 Array[4, 5, 3]; B会报错，因为没有给 [foo] 的计算属性赋值; C 对 ; D 对, 相当于类的定义和调用在一起，("Nicholas"),相当于调用构造函数，并把参数传过去

