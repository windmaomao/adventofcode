const filereader = require('./utils/filereader')

// const items = [
//   { p: { x: 16, y: -8, z: 13 }, v: { x: 0, y: 0, z: 0}},
//   { p: { x: 4, y: 10, z: 10 }, v: { x: 0, y: 0, z: 0 }},
//   { p: { x: 17, y: -5, z: 6 }, v: { x: 0, y: 0, z: 0 }},
//   { p: { x: 13, y: -3, z: 0 }, v: { x: 0, y: 0, z: 0 }}
// ]

// const items = [
//   { p: [16,-8,13], v: [0,0,0] },
//   { p: [4,10,10],  v: [0,0,0] },
//   { p: [17,-5,6],  v: [0,0,0] },
//   { p: [13,-3,0],  v: [0,0,0] }
// ]

const items = [
  { p: [-1, 0, 2], v: [0, 0, 0] },
  { p: [2, -10, -7], v: [0, 0, 0] },
  { p: [4, -8, 8], v: [0, 0, 0] },
  { p: [3, 5, -1], v: [0, 0, 0] }
]

const _zero = () => ([0,0,0])

const _minus = (p2, p1) => ([
  p2[0] - p1[0],
  p2[1] - p1[1],
  p2[2] - p1[2],
])

const _sign = p => ([
  Math.sign(p[0]),
  Math.sign(p[1]),
  Math.sign(p[2]),
])

const _plus = (p1, p2) => ([
  p2[0] + p1[0],
  p2[1] + p1[1],
  p2[2] + p1[2],
])

let done = false, step = 1

while (step < 11) {
  console.log('STEP', step)
  const v = new Array(4).fill(_zero())
  items.forEach((i, ii) => {
    items.forEach((j, jj) => {
      if (ii != jj) {
        const gravity = _minus(j.p, i.p)
        const sign = _sign(gravity)
        v[ii] = _plus(v[ii], sign)
      }
    })
  })
  items.forEach((i, ii) => {
    console.log(v[ii])
    i.v = _plus(i.v, v[ii])
    i.p = _plus(i.p, i.v)
  })
  items.forEach((i, ii) => {
    console.log(i.p)
  })

  step++
}

console.log('Day 12/1:', true)
