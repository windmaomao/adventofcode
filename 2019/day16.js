const filereader = require('./utils/filereader')
const raw = filereader.readFile('day16.data', '', true)
const debug = require('debug')('day16:')

// debug(raw) 
// const str = '80871224585914546619083218645595'
// const raw = str.split('')

const basePattern = [0,1,0,-1]

const timeIndex = (i, j) => (j / i | 0) % 4
const firstDigit = (i) => Math.abs(i) % 10
const fft = digits => {
  return digits.map((d, i) => {
    const pattern = digits.map((_, j) => basePattern[timeIndex(i + 1, j + 1)])
    return digits.reduce((acc, d, _i) => acc + d * pattern[_i], 0)
  }).map(firstDigit)
}

let count = 0, total = 100, digits = [...raw]
while (count < total) {
  digits = fft(digits)
  count++
}

const firstFew = [
  digits[0], digits[1], digits[2], digits[3],
  digits[4], digits[5], digits[6], digits[7],
]

debug(firstFew)

// debug(timeIndex(1, 3))
// debug((1 / 3 | 0))
// debug(7 % 4)
// debug((7 / 2 | 0) % 4)
// debug((7 / 3 | 0) % 4)
// debug((8 / 4 | 0) % 4)

// 0 1 0 -1
// 0 1 2 3
  
//    0 1 2 3 4 5 6 7 8 9 
// 1, 0 1 2 3 0 1 2 3 0 1
// 2, 0 0 1 1 2 2 3 3 0 0
// 3, 0 0 0 1 1 1 2 2 2 3 3 3 
// 4, 0 0 0 0 1 1 1 1 2 2 2 2 3 3 3 3