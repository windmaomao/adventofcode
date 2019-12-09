const _dist = p => Math.abs(p.x) + Math.abs(p.y)

const points = line => {
  let step = 0
  const o = { x: 0, y: 0 }
  const parts = line.split(',')

  return parts.reduce((acc, ins) => {
    const char = ins[0]
    const num = parseInt(ins.substring(1))
    const next = (dx, dy) => {
      step++; o.x += dx; o.y += dy;
      acc.push({ ...o, dist: _dist(o), step })
    }
    for (let i = 1; i <= num; i++) {
      switch (char) {
        case 'R': next(1, 0); break
        case 'L': next(-1, 0); break
        case 'U': next(0, 1); break
        case 'D': next(0, -1); break
      }
    }
    return acc
  }, [])
}

module.exports = points