// submitted 12/15/21
//. the idea is to use brutal force
function patternMatcher(pattern, string) {
  const m = pattern.length
    , n = string.length
  
  const parr = pattern.split('')
  const vars = ['x', 'y']
  const counts = vars.map(c => 
    parr.filter(v => v == c).length
  )
  const hs = counts.map(v => 
    Math.min(Math.floor(n / v), n)
  )
  const ls = counts.map(v => v ? 1 : 0)
  const is = [0, 0]
  let matched = null
  
  for (is[0] = ls[0]; is[0] <= hs[0]; is[0]++) {
    for (is[1] = ls[1]; is[1] <= hs[1]; is[1]++) {
      if (matched) continue
      const s = vars.reduce((acc, _, i) => {
        return acc + is[i] * counts[i]
      }, 0)
      if (s != n) continue
      
      let k = 0, matches = [[], []]
      parr.forEach(c => {
        const i = c == 'x' ? 0 : 1
        const str = string.slice(k, k + is[i])
        matches[i].push(str)
        k += is[i]
      })
      
      const strs = matches.map(m => m
        .filter((v, i, arr) => arr.indexOf(v) == i)
      )
      
      const _matched = strs
        .map((m, i) => (
          strs[i].length ? (m.length == 1) : true
        )).every(v => v)
      
      if (_matched) matched = strs
    }
  }
  
  return matched ? matched.map(a => a[0] || '') : []
}

console.log(patternMatcher('xxyxxy', 'gogopowerrangergogopowerranger'))
