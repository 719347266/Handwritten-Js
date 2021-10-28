Function.prototype.yhapply = function (thisArg, argArray) {
  var fn = this
  thisArg = thisArg != null && thisArg != undefined ? Object(thisArg) : window
  var result
  argArray = argArray || []
  thisArg.fn = fn
  result = thisArg.fn(...argArray)
  delete thisArg.fn
  return result
}

function foo(...arg) {
  console.log(this)
  console.log(arg)
}

function sum(num1, num2) {
  console.log('sum被调用', this, num1, num2)
  return num1 + num2
}

var a = sum.yhapply({ a: 1 }, [20, 30])
console.log(a)

foo.yhapply(0)

// foo.apply({ age: '123' }, 1)
