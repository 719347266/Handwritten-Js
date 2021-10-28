function yhnew() {
  // 新建一个空对象
  const obj = new Object()
  // 获取到构造函数
  const Constructor = [].shift.call(arguments)
  // 利用原型 实例对象的隐式原型 指向构造函数的显示原型(继承关系)
  obj.__proto__ = Constructor.prototype
  // apply 改变构造函数的this指向 如果构造函数返回 一个对象就直接将这个对象返回 否则就返回 新创建的对象
  const rst = Constructor.apply(obj, arguments)
  return typeof rst === "object" ? rst : obj
}

function Foo(age, name) {
  this.age = age
  this.name = name
  // return {
  //   aaa: 'aaa',
  // }
}
Foo.prototype.foo1 = function () {
  console.log("foo1")
}
const f1 = yhnew(Foo, 18, "zs")
const f2 = yhnew(Foo, 20, "ls")
// console.log(f1)
// console.log(f2)

// console.log(f1 instanceof Foo)

// const p1 = new Foo(18, 'zs')
// console.log(p1)
