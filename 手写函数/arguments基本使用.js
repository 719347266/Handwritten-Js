function foo(num1, num2) {
  // 类数组对象中(长的像是一个数组, 本质上是一个对象): arguments
  // console.log(arguments)
  console.log(arguments)

  // callee获取当前arguments所在的函数
  console.log(arguments.callee)
}

foo(10, 20, 30, 40, 50, 60)
