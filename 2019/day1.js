// Part 1
const modules = [129561, 125433, 97919, 93037, 73254, 96511, 115676, 95032, 69369, 145385, 111145, 64368, 83462, 95765, 133284, 136563, 67439, 69311, 147720, 92632, 142940, 100610, 106538, 80025, 121672, 125386, 126601, 67943, 120022, 95914, 132721, 105831, 138493, 57649, 72843, 81754, 103116, 148993, 139042, 145929, 61039, 126034, 74187, 60750, 99048, 131776, 123137, 113098, 107571, 117050, 108649, 117455, 147443, 121863, 104952, 103465, 128718, 61795, 121049, 112010, 74403, 56153, 136161, 76872, 94156, 131477, 91769, 90744, 118647, 135791, 98914, 104988, 62070, 82308, 71964, 91477, 63733, 84412, 127000, 65449, 67976, 51400, 56045, 82951, 101119, 143015, 99388, 51796, 93467, 63220, 124459, 136330, 130535, 144270, 88616, 63626, 139954, 92191, 117618, 110422]

// const modules = [100756, 1969, 14]

const part1Fuel = modules.reduce((acc, m) => {
  acc = acc + (Math.floor(m / 3) - 2)
  return acc
}, 0)
console.log('Day 1/1 - Fuel:', part1Fuel)

const massFuel = m => {
  const fuel = Math.floor(m / 3) - 2
  return fuel > 0 ? fuel : 0
}
const massTotalFuel = mass => {
  let leftMass = mass
  let fuel = 0
  do {
    leftMass = massFuel(leftMass)
    fuel = fuel + leftMass
  } while (leftMass > 0)
  return fuel
}

const part2Fuel = modules.reduce((acc, m) => {
  acc = acc + massTotalFuel(m)
  return acc
}, 0)
console.log('Day 1/2 - Fuel:', part2Fuel)