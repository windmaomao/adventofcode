function ambiguousMeasurements(cups, low, high) {
  const counts = cups.map(c => {
    const ceils = [low, high].map((v, i) => 
      Math.ceil(v / c[i])
    )
    return Math.min(...ceils)
  })

  const range = (curr) => {
    const n = curr.length
    const sum = [0, 0]
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < n; k++) {
        sum[j] += curr[k]*cups[k][j]
      }
    }
    return sum
  }
  
  let memo = {}
  let steps = 0
  let hits = 0
  const visit = (curr) => {
    const i = curr.length
    steps++
    
    const r = range(curr)
    const key = r.join(':')
    let f = false

    if (memo[key] == undefined) {
      if (r[1] <= high) {
        if (r[0] >= low) {
          f = true
        } else {
          if (i < cups.length) {
            const choices = new Array(counts[i] + 1)
              .fill(0).map((_, k) => k)
            choices.forEach(v => {
              f = f || visit([...curr, v])
            })
          }
        }
      }
    } else {
      hits++
    }
    
    memo[key] = f
//  console.log(steps, f, key, curr)
    return f
  }
  
  const res = visit([])
  console.log('k:' + steps + ' hits: ' + hits)
  return res
}

const { log } = console
//log(ambiguousMeasurements([
//[200,210], [450,465], [800,850]
//], 2100, 2300))

//log(ambiguousMeasurements([
//[1, 3],
//[2, 4],
//[5, 6],
//], 100,101))

log(ambiguousMeasurements([
  [50, 65],
  [100, 120],
  [20, 40],
  [10, 15],
  [400, 500],
  [300, 350],
  [10, 25]
], 3000,3300))