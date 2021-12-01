const bundle = require('./bundle')
const nums = bundle.read('01a', '\n', true)

const part1 = ns => {
  return ns.reduce((acc, v, i) => {
    if (i > 0) { 
      if (v > ns[i - 1]) acc++
    }
    return acc
  }, 0)
}

bundle.run(part1, nums)

const part2 = (ns) => {
  const res = ns.map((v, i) => {
    if (i < ns.length - 2) {
      return ns[i] + ns[i+1] + ns[i+2]
    } else {
      return -Infinity
    }
  })
  return part1(res)
}

bundle.run(part2, nums)