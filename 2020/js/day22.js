const getGame = () => {
  const players = lines.map(l => {
    return l.split('\n').slice(1)
      .map(v => parseInt(v))
  })
  return players
}

const score = res => {
  const n = res.length
  return res.reduce((acc, v, i) => {
    return acc + v * (n - i)
  }, 0)
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
  const w = ps[0].length ? 0 : 1
  return score(ps[w])
}

const part2 = mat => {
  const play = ps => {
    while (ps[0].length && ps[1].length) {
      const startSub = ps.map(p => p.length > p[0])
        .every(v => v)
      let w = 0
      if (startSub) {
        w = play(ps.map(p => p.slice(1, 1 + p[0])))
      } else {
        w = ps[0][0] > ps[1][0] ? 0 : 1
      }
      const winner = ps[w]
      const loser = ps[1-w]
      winner.push(winner.shift())
      winner.push(loser.shift())
    }
    
    return ps[0].length ? 0 : 1
  }

  const decks = mat.map(v => [...v])
  return score(decks[play(decks)])
}

const read = require('./read.js')
const lines = read('22', '\n\n')
const run = require('./run')
const g = getGame()
run(part1, g)
run(part2, g)