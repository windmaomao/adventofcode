const bundle = require('./bundle')
const inputs = bundle.read('03a', '\n', false)
  .map(v => v.split('').map(c => parseInt(c)))

const b2d = a => [...a]
  .reverse()
  .reduce((acc, v, i) => acc + 2 ** i * v, 0)

const bitFreq = (res, i) => res
  .reduce((c, bits) => bits[i] ? ++c : --c, 0)
  
const gammaRule = v => v >= 0 ? 1: 0
const epsilonRule = v => v < 0 ? 1 : 0

const part1 = (ns) => {
  const n = ns[0].length
  const fs = [].new(n).map((_, i) => bitFreq(ns, i))
  const gamma = b2d(fs.map(gammaRule))
  const epsilon = b2d(fs.map(epsilonRule))
  return gamma * epsilon
}

bundle.run(part1, inputs)

const calculate = (ns, rule) => {
  const n = ns[0].length
  let res = [...ns]
  
  let i = 0
  while ((res.length > 1) && i < n) {
    const k = bitFreq(res, i)
    const picked = rule(k)
    res = res.filter(bits => bits[i] == picked)
    i++
  }
  
  return res[0]
}


const part2 = (ns, n) => {
  const gamma = b2d(calculate(ns, gammaRule))
  const epsilon = b2d(calculate(ns, epsilonRule))
  return gamma * epsilon
}

bundle.run(part2, inputs)

  
  