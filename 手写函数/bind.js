// js原生bind函数会返回一个函数 这里也返回一个函数实现
Function.prototype.yhbind = function (thisArg, ...argArray) {
  // 获取调用的函数
  var fn = this
  // thisArg是改变this的对象 如果 thisArg 传的是 null 或者 undefined 就将this绑定为window
  // 这里边界判断 0 转成布尔值 是一个false
  thisArg = thisArg != null && thisArg != undefined ? Object(thisArg) : window
  return function () {
    // 改变完指向 在该指向对象内添加一个fn的属性 (就是上面的this) 形成隐式绑定
    thisArg.fn = fn
    // 将两次接收的值 全部传入给调用的函数
    var result = thisArg.fn(...argArray, ...arguments)
    delete thisArg.fn
    return result
  }
}

function sum(num1, num2) {
  console.log('sum被调用', this, num1, num2)
  return num1 + num2
}

function foo(...arg) {
  console.log(this)
  console.log(...arg)
}

// var foo1 = foo.bind(null, 10, 20, 30)(40, 50, 60)

var foo1 = foo.yhbind({ age: 18 }, 10, 20, 30)(40, 50, 60)

// var a = sum.bind(null, 10, 20)

// var b = a()
// console.log(b)
