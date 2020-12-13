const read = require('./read.js')
const raw = read('13')

const depart = parseInt(raw[0])
const schedules = raw[1]
  .split(',')
  .map(v => (v == 'x' ? 0 : parseInt(v)))

const part1 = buses => {
  const waitings = buses.map(b => (b - depart % b))
  let i = 0, min = Infinity, res = 0
  while (i < waitings.length) {
    if (waitings[i] < min) {
      min = waitings[i]
      res = buses[i] * waitings[i]
    }
    i++
  }
  return res
}

console.log(part1(schedules))

const mod = (a, b) => ((a % b + b) % b)

// b0 m + r0 = b1 n + r1 , return m
const findN = (b0, r0, b1, r1) => {
  const f = mod(r1, b1)
  let i = r0, k = 0
  while (i != f) {
    i += b0
    i = mod(i, b1)
    k++
  }
  return k
}

// The equation is solved in layers 
//               17          13
// 17: 17n
// 13: 13n+11   17*(13n+6)   
// 19: 19n+16   17*(19n+11)  n=15
const part2 = buses => {
  const bases = [], rounds = []
  buses.forEach((b, i) => {
    if (b != 0) {
      bases.push(b)
      rounds.push(b - i)
    }
  })
  rounds[0] = 0
//  console.log(bases, rounds)

  for (let i = 0; i < bases.length - 1; i++) {
    for (let j = i + 1; j < bases.length; j++) {
      rounds[j] = findN(bases[i], rounds[i], bases[j], rounds[j])
    }
  }
  
  let k = bases.length -1
  let res = rounds[k]
  while (k > 0) {
    k--
    res = res * bases[k] + rounds[k]
  }
  
  return res
}

console.log(part2(schedules))

//console.log(findN(17, 0, 13, 11))
//console.log(findN(17, 0, 19, 16))
//console.log(findN(13, 6, 19, 11))
//console.log(findN(17, 0, 13, -2))
//console.log(findN(17, 0, 19, -3))

//const bases1 = 	[17, 13, 19]
//const rounds1 = [0, 11, 16]
//console.log(part2(bases1, rounds1))
//
//const bases2 = 	[67, 7, 59, 61]
//const rounds2 = [0, 6, 57, 58]
//console.log(part2(bases2, rounds2))
//
//const bases3 = 	[67, 7, 59, 61]
//const rounds3 = [0, 5, 56, 57]
//console.log(part2(bases3, rounds3))
//
//const bases4 = 	[67, 7, 59, 61]
//const rounds4 = [0, 6, 56, 57]
//console.log(part2(bases4, rounds4))
//
//const bases5 = 	[1789, 37, 47,1889]
//const rounds5 = [0, 36, 45, 1886]
//console.log(part2(bases5, rounds5))
//
//const base6 = 	[19,41,643,17,13,23,509,37,29]
//const rounds6 = [0,41-9,643-19,17-36,13-37,23-42,509-50,37-56,29-79]
//console.log(part2(base6, rounds6))