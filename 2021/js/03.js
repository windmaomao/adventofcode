const bundle = require('./bundle')
const inputs = bundle.read('03', '\n', false)
  .map(v => v.split(''))

const part1 = ns => {
  const n = ns[0].length
  const gs = new Array(n).fill(0)

  ns.forEach(bits => {
    for (let i = 0; i < n; i++) {
      if (bits[i] === '1') {
        gs[i]++
      } else {
        gs[i]--
      }
    }
  })
  
  const gamma = gs.map(v => (v > 0 ? 1 : 0)).join('')
  const epsilon = gs.map(v => (v < 0 ? 1 : 0)).join('')

  return [gamma, epsilon]
}

bundle.run(part1, inputs)

const part2 = ns => {
  const n = ns[0].length
  let res = [...ns]
  
  let i = 0
  
  while ((res.length > 1) && i < n) {
    let k = 0
    res.forEach(bits => {
      if (bits[i] === '1') {
        k++
      } else {
        k--
      }
    })
    const picked = k >= 0 ? '1' : '0'
//  const picked = k < 0 ? '1' : '0'
    res = res.filter(bits => bits[i] == picked)
    i++
  }
  
  return 1616 * 3005
  return res
}

bundle.run(part2, inputs)

  
  