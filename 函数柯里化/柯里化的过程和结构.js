function add(a, b, c) {
  return a + b + c
}

console.log(add(10, 20, 30))

function add1(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

console.log(add1(10)(20)(30))

var add2 = a => b => c => a + b + c

console.log(add2(10)(20)(30))
