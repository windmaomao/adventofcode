const transform = (arr, reduce, init) => {
  const result = arr.reduce((acc, item) => {
    if (acc.found) return acc

    const res = reduce(acc.value, item)
    if (res !== false) {
      acc.value = res
    } else {
      acc.found = true
    }

    return acc
  }, { value: init, found: false })

  return result.found ? result.value : false
}

module.exports = transform


const a = [0, 1, 1, 3, 1]

console.log(transform(a, (acc, v) => {
  if (v === 3) return false
  if (v === 1) return ++acc
  return acc
}, 0))