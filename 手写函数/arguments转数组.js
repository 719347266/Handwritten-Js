function foo() {
  // 自己遍历
  var newArray = []
  for (var i = 0; i < arguments.length; i++) {
    newArray.push(arguments[i])
  }
  console.log(newArray)

  // 2.Array.prototype.slice将arguments转成array
  var a = Array.prototype.slice.call(arguments)
  console.log(a)
  // 同上 简写
  var b = [].slice.call(arguments)
  console.log(b)

  // es6语法
  var c = [...arguments]
  console.log(c)
  var d = Array.from(arguments)
  console.log(d)
}

foo(10, 20, 30, 40, 50, 60, 70, 80, 90)

// 实现 slice函数
Array.prototype.yhslice = function (start, end) {
  // 获取当前调用的函数
  var arr = this
  var newArray = []
  // 默认值
  start = start || 0
  // 默认arguments函数的最大值
  end = end || arguments.length
  for (var i = start; i < end; i++) {
    newArray.push(arr[i])
  }
  return newArray
}
;[10, 20, 30, 40, 50, 60].yhslice(0, 3)

var aaaa = Array.prototype.yhslice.call([11, 55, 33, 55, 77, 88], 1, 3)
console.log(aaaa)
