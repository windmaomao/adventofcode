const filereader = require('./utils/filereader.js')
const modules = filereader.readFile('day1.data')

const fuelCalc = mass => Math.floor(mass / 3) - 2

console.log('Day 1/1 - Fuel:', modules
  .map(fuelCalc)
  .reduce((acc, v) => acc + v)
)

const totalFuelCalc = mass => {
  let fuel = 0
  let current = fuelCalc(mass)
  while (current > 0) {
    fuel += current
    current = fuelCalc(current)
  }
  return fuel
}

console.log('Day 1/2 - Fuel:', modules
  .map(totalFuelCalc)
  .reduce((acc, v) => acc + v)
)


// Part 1
// const modules = [129561, 125433, 97919, 93037, 73254, 96511, 115676, 95032, 69369, 145385, 111145, 64368, 83462, 95765, 133284, 136563, 67439, 69311, 147720, 92632, 142940, 100610, 106538, 80025, 121672, 125386, 126601, 67943, 120022, 95914, 132721, 105831, 138493, 57649, 72843, 81754, 103116, 148993, 139042, 145929, 61039, 126034, 74187, 60750, 99048, 131776, 123137, 113098, 107571, 117050, 108649, 117455, 147443, 121863, 104952, 103465, 128718, 61795, 121049, 112010, 74403, 56153, 136161, 76872, 94156, 131477, 91769, 90744, 118647, 135791, 98914, 104988, 62070, 82308, 71964, 91477, 63733, 84412, 127000, 65449, 67976, 51400, 56045, 82951, 101119, 143015, 99388, 51796, 93467, 63220, 124459, 136330, 130535, 144270, 88616, 63626, 139954, 92191, 117618, 110422]
// const modules = [100756, 1969, 14]

