// const items = [
//   { p: [16, -8, 13], v: [0, 0, 0], e: 0 },
//   { p: [4, 10, 10], v: [0, 0, 0], e: 0 },
//   { p: [17, -5, 6], v: [0, 0, 0], e: 0 },
//   { p: [13, -3, 0], v: [0, 0, 0], e: 0 }
// ]

const items = [
  { p: [-1, 0, 2], v: [0, 0, 0], e: 0 },
  { p: [2, -10, -7], v: [0, 0, 0], e: 0 },
  { p: [4, -8, 8], v: [0, 0, 0], e: 0 },
  { p: [3, 5, -1], v: [0, 0, 0], e: 0 }
]

items.forEach(i => {
  i['po'] = [...(i.p)]
})

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

const _sum = p => (
  Math.abs(p[0]) + 
  Math.abs(p[1]) + 
  Math.abs(p[2])
)

const _energy = (p, v) => _sum(p) * _sum(v)

const _total = () => items.reduce((acc, i) => 
  acc + _energy(i.p, i.v), 0
)

const _same = (p1, p2) => (
  p1[0] == p2[0] &&
  p1[1] == p2[1] &&
  p1[2] == p2[2]
) 

let done = false, step = 0, total = 1000002002773, initial = _total()

console.log('INITIAL', initial)

const loop = [
  [0, 1], [0, 2], [0, 3],
  [1, 2], [1, 3], [2, 3]
]

let ii,jj,sign

while (!done) {
  // console.log('STEP', step + 1)
  const v = new Array(4).fill(_zero())
  loop.forEach(o => {
    ii = o[0], jj = o[1]
    sign = _sign(_minus(items[jj].p, items[ii].p))
    v[ii] = _plus(v[ii], sign)
    v[jj] = _minus(v[jj], sign)
  })

  items.forEach((i, ii) => {
    i.v = _plus(i.v, v[ii])
    // console.log(i.v)
    i.p = _plus(i.p, i.v)
  })

  done = _total() == initial
  if (done) {
    console.log('Match', step + 1)
    done = items.reduce((acc, i) => acc && _same(i.p, i.po), true)
  }

  if (step % 10000000 == 0) console.log('Step', step)
  step++
}

console.log('Day 12/1:', _total())
console.log('Day 12/2:', step)
