const filereader = require('./utils/filereader')
// const raw = filereader.readFile('day16.data', '', true)
const debug = require('debug')('day16:')

const str = '03081770884921959731165446850517'
const raw = str.split('')

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

debug(digits.join(''))

const offset = +raw.slice(0, 7).join('')
debug(offset)

const N = 10000, rawL = raw.length
const bigArr = new Array(rawL * N)
for(let i = 0; i< N; i++) {
  raw.forEach((v, j) => {
    bigArr[i*rawL+j] = +v
  })
}
debug('Big', bigArr.length)

let restArr = bigArr.slice(offset)
debug('Rest', restArr.length)
// debug(+restArr.slice(0, 7).join(''))  

const fft2 = arr => {
  let sum = 0
  const count = arr.length
  arr.forEach((_, i) => {
    sum += arr[count-1-i]
    arr[count-1-i] = sum % 10
  })
}

count = 0; 
while (count < total) {
  fft2(restArr)
  count++
}
debug(+restArr.slice(0, 8).join(''))


// debug(restArr.slice(0, 8).join(''))

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