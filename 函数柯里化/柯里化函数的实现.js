function sum(x, y, z) {
  return x + y + z
}

function yhCurrying(fn) {
  // 返回一个函数作为调用函数(fn是调用函数)的参数接收(curried是接收参数调用fn)
  function curried(...arg) {
    // 判断fn函数接收的参数个数 和 传参个数 是否一样
    if (arg.length >= fn.length) {
      // apply调用是考虑到外面如果显示绑定了this 用apply改变绑定后的this指向 调用fn的函数
      return fn.apply(this, arg)
    } else {
      // 和fn需要的参数不匹配返回新函数接收参数 递归调用curried走上面的逻辑直到参数匹配为止
      function curried2(...arg1) {
        // console.log(arguments.callee, 'arguments')
        return curried.apply(this, [...arg1, ...arg])
      }
      return curried2
    }
  }
  return curried
}

var resule = yhCurrying(sum)

console.log(resule(10)(10)(10))
console.log(resule(10, 10, 10))
console.log(resule(10, 10)(10))
console.log(resule(10)(10, 10))
