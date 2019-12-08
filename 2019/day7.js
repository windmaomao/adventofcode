const filereader = require('./utils/filereader')
const data = filereader.readFile('/day7.data', ',', true)
const permute = require('./utils/permute')
const intcode = require('./day7_intcode')
const transform = require('./utils/transform')

const _data = () => ([...data])
const thrusts = permute([0, 1, 2, 3, 4])
  .map(signals => {
    return signals.reduce((acc, signal) => {
      return intcode(
        _data(), signal, 
        { once: false, prev: acc }
      )
    }, 0)
  })

console.log('Day 7/1:', Math.max(...thrusts))

const thrusts2 = permute([9, 8, 7, 6, 5]).map(signals => {
  const datas = new Array(5).fill(_data())
  const ps = new Array(5).fill(0)

  let thrust = 0, found = false
  while (!found) {
    let config = {}
    thrust = transform(signals, (_, acc, signal, i) => {
      const res = intcode(
        datas[i], signal,
        { once: true, i: ps[i], prev: acc }
      )
      
      if (res) { 
        [ps[i], acc] = res 
      } else {
        _.stop = true
      }

      return acc
    }, thrust, config)

    if (config.stop) found = true
  }

  return thrust
}, 0)

console.log('Day 7/2:', Math.max(...thrusts2))


// const data = [3, 15, 3, 16, 1002, 16, 10, 16, 1, 16, 15, 15, 4, 15, 99, 0, 0]
// const data = [3, 23, 3, 24, 1002, 24, 10, 24, 1002, 23, -1, 23,
//   101, 5, 23, 23, 1, 24, 23, 23, 4, 23, 99, 0, 0]


// const data = [3, 26, 1001, 26, -4, 26, 3, 27, 1002, 27, 2, 27, 1, 27, 26, 27, 4, 27, 1001, 28, -1, 28, 1005, 28, 6, 99, 0, 0, 5]
// const signals = [9, 8, 7, 6, 5]

// const data = [3, 52, 1001, 52, -5, 52, 3, 53, 1, 52, 56, 54, 1007, 54, 5, 55, 1005, 55, 26, 1001, 54, -5, 54, 1105, 1, 12, 1, 53, 54, 53, 1008, 54, 0, 55, 1001, 55, 1, 55, 2, 53, 55, 53, 4, 53, 1001, 56, -1, 56, 1005, 56, 6, 99, 0, 0, 0, 0, 10]
// const signals = [9, 7, 8, 5, 6]

