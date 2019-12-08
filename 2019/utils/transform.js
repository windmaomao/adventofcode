const transform = (arr, reduce, init) => {
  const result = arr.reduce((acc, item, i, arr) => {
    if (acc.found) return acc

    const config = {}
    acc.value = reduce(config, acc.value, item, i, arr)

    if (config.stop) {
      acc.found = true
    }

    return acc
  }, { value: init, found: false })

  return result.found ? result.value : false
}

module.exports = transform


const a = [0, 1, 1, 3, 1]

console.log(transform(a, (config, acc, v) => {
  if (v === 3) { config.stop = true }
  if (v === 1) return ++acc
  return acc
}, 0))