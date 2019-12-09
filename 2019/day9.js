const filereader = require('./utils/filereader')
const data = filereader.readFile('day9.data', ',', true)
const intcode = require('./day9_intcode')

console.log('Day 9/1:', intcode([...data], 1, { verbose: false }))
console.log('Day 9/2:', intcode([...data], 2, { verbose: false }))

// const data = [104, 1125899906842624, 99]
// const data = [1102, 34915192, 34915192, 7, 4, 7, 99, 0]
// const data = [109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99]