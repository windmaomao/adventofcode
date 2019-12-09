const filereader = require('./utils/filereader.js')
const data = filereader.readFile('/day3.data')

const lines = data.map(line => {
  const parts = line.split(',')
  const o = { x: 0, y: 0 }

  return parts.reduce((acc, ins) => {
    const char = ins[0]
    const num = parseInt(ins.substring(1))
    const next = (dx, dy) => {
      o.x += dx; o.y += dy; acc.push({...o})
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
})

console.log(lines[0].length, lines[1].length)

let prev = { x: 0, y: 0 }, filter = { x: [], y: [] }
const intersect = (arr1, arr2) => {
  arr1.filter(a1 => {
    // console.log(a1)
    if (a1.x != prev.x) filter.x = arr2.filter(a2 => a2.x == a1.x)
    if (a1.y != prev.y) filter.y = arr2.filter(a2 => a2.y == a1.y)

    const found = filter.x.filter(b1 => {
      return filter.y.filter(b2 => {
        b1.x == b2.x && b1.y == b2.y
      })
    })
    // console.log(found)
  })
}

console.log(intersect(lines[0], lines[1]))
