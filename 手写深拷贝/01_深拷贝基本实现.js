function isObject(value) {
  const valueType = typeof value
  return value !== null && (valueType === "object" || valueType === "function")
}

function deepClone(originValue) {
  if (!isObject(originValue)) {
    return originValue
  }

  const newObject = {}
  for (const key in originValue) {
    newObject[key] = originValue[key]
  }
  return newObject
}

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
}

const newObj = deepClone(obj)
console.log(newObj)

obj.friend.name = "zs"
console.log(newObj)
