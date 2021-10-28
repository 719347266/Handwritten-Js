Function.prototype.yhcall = function (thisArg, ...argArray) {
  // this指向与当前调用的函数(隐式绑定)
  var fn = this
  // thisArg是改变this的对象 如果 thisArg 传的是 null 或者 undefined 就将this绑定为window
  // 这里边界判断 0 转成布尔值 是一个false
  thisArg = thisArg != null && thisArg != undefined ? Object(thisArg) : window
  // 改变完指向 在该指向对象内添加一个fn的属性 (就是上面的this) 形成隐式绑定
  thisArg.fn = fn
  // 隐私绑定调用函数 改变this指向 如果调用函数有返回值将它返回
  var result = thisArg.fn(...argArray)
  // 删除添加的函数
  delete thisArg.fn
  // 将返回值 return 出去
  return result
}

function foo(...arg) {
  console.log(this)
  console.log(arg)
}

foo.yhcall(0)

// foo.call({name: 123})
