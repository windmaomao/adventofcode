const transform = (arr, reduce, init, config = {}) => {
  const result = arr.reduce((acc, item, i, arr) => {
    if (acc.found) return acc

    acc.value = reduce(config, acc.value, item, i, arr)

    if (config.stop) {
      acc.found = true
    }

    return acc
  }, { value: init, found: false })

  return result.value
}

module.exports = transform


const a = [0, 1, 1, 3, 1]

console.log(transform(a, (config, acc, v) => {
  if (v === 3) { config.stop = true }
  if (v === 1) return ++acc
  return acc
}, 0))