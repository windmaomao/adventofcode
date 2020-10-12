import '../../utils/js/array'

const numValid = num => {
  const s = `${num}`
  if (!s.match(/(.)\1/g)) return false
  return !s.split('').windowed(2).some(a => a[0] > a[1])
}

const part1 = r => Array
  .range(r[0], r[1])
  .map(numValid)
  .count(true)

// const part2 = 

export { numValid, part1 }