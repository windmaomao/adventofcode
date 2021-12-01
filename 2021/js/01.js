const part = (ns) => {
  let prev = null
  return ns.reduce((acc, v) => {
    if (prev && v > prev) acc++
    prev = v
    return acc
  }, 0)
}

const part2 = (ns) => {
  const n = ns.length
  const res = []
  for (let i = 0; i < n - 2; i++) {
    res.push(ns[i] + ns[i+1] + ns[i+2])
  }
  return part(res)
}

const bundle = require('./bundle')
const nums = bundle.read('01a', '\n', true)
bundle.run(part, nums)
bundle.run(part2, nums)