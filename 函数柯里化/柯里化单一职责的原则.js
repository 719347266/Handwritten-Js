function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

function add2(x) {
  x = x + 2
  return function (y) {
    y = y * 2
    return function (z) {
      z = z * z
      return x + y + z
    }
  }
}

console.log(add2(10)(20)(30))
