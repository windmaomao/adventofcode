const bundle = require('./bundle')
const nums = bundle.read('01a', '\n', true)

const part1 = ns => ns.sum((v, i, arr) => 
  i > 0 && v > arr[i-1] ? 1 : 0  
)

bundle.run(part1, nums)

const part2 = (ns) => ns
  .range(ns.length - 2)
  .map((_, i) => ns[i] + ns[i+1] + ns[i+2])
  .sum((v, i, arr) => 
    i > 0 && v > arr[i-1] ? 1 : 0  
  )

bundle.run(part2, nums)