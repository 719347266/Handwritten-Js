function add(count) {
  return function (num) {
    return count + num
  }
}

var result = add(5)

console.log(result(10))
console.log(result(20))
console.log(result(30))
console.log(result(40))
