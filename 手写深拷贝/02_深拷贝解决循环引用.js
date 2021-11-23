function isObject(value) {
  const valueType = typeof value
  return value !== null && (valueType === "object" || valueType === "function")
}

function deepClone(originValue, map = new WeakMap()) {
  // 判断是否是一个Set类型
  if (originValue instanceof Set) {
    return new Set([...originValue])
  }
  // 判断是否是一个Map类型
  if (originValue instanceof Map) {
    return new Map([...originValue])
  }

  // 判断如果是Symbol的value, 那么创建一个新的Symbol
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description)
  }

  // 判断如果是函数类型, 那么直接使用同一个函数
  if (typeof originValue === "function") {
    return originValue
  }

  // 判断传入的originValue是否是一个对象类型
  if (!isObject(originValue)) {
    return originValue
  }

  // 解决循环引用 使用map数据结构
  // 1.第一次进来 WeakMap是一个空对象
  // 2.当递归调用时 map是上级函数调用传参过来的map会有对应 互相引用的对象地址值 直接返回即可
  if (map.has(originValue)) {
    return map.get(originValue)
  }

  // 判断传入的对象是数组, 还是对象
  const newObject = Array.isArray(originValue) ? [] : {}
  // 往map添加 新建对象的引用(第一次是一个空的对象)
  map.set(originValue, newObject)
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key], map)
  }

  // 对Symbol的key进行特殊的处理
  const symbolKeys = Object.getOwnPropertySymbols(originValue)
  for (const sKey of symbolKeys) {
    newObject[sKey] = deepClone(originValue[sKey], map)
  }

  return newObject
}

let s1 = Symbol("aaa")
let s2 = Symbol("bbb")

// 测试代码
const obj = {
  name: "why",
  age: 18,
  friend: {
    name: "james",
    address: {
      city: "广州",
    },
  },
  arr: [1, 2, 3, 4, 5],
  foo: function () {
    console.log("foo")
  },
  [s1]: "abc",
  s2: s2,
  set: new Set(["aaa", "bbb", "ccc"]),
  map: new Map([
    ["aaa", "abc"],
    ["bbb", "cba"],
  ]),
}

obj.info = obj

const newObj = deepClone(obj)
obj.info.name = "zs"
console.log(newObj)
console.log(newObj === obj)
