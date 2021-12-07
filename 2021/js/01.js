const bundle = require('./bundle')
const nums = bundle.read('01', '\n', true)

const part1 = ns => ns.sum((v, i, arr) =>
  i > 0 && v > arr[i-1] ? 1 : 0
)

const part2 = (ns) => ns
  .slice(0, ns.length - 1)
  .map((_, i) => ns[i] + ns[i+1] + ns[i+2])
  .sum((v, i, arr) => 
    i > 0 && v > arr[i-1] ? 1 : 0  
  )

bundle.run(part1, nums)
bundle.run(part2, nums)