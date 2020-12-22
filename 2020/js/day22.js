const getGame = () => {
  const players = lines.map(l => {
    return l.split('\n').slice(1)
      .map(v => parseInt(v))
  })
  return players
}

const part1 = mat => {
  const ps = mat.map(v => [...v])

  while (ps[0].length && ps[1].length) {
    const w = ps[0][0] > ps[1][0] ? 0 : 1
    const winner = ps[w]
    const loser = ps[1-w]
    winner.push(winner.shift())
    winner.push(loser.shift())
  }

  const res = ps[0].length ? ps[0] : ps[1]
  const n = res.length
  return res.reduce((acc, v, i) => {
    return acc + v * (n - i)
  }, 0)
}

const read = require('./read.js')
const lines = read('22', '\n\n')
const run = require('./run')
// console.log(getGame())
run(part1, getGame())