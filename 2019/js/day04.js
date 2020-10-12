import '../../utils/js/array'

const numValid = num => {
  const s = `${num}`
  if (!s.match(/(.)\1/g)) return false
  return !s.split('').windowed(2).some(a => a[0] > a[1])
}

const part1 = r => Array
  .range(r[0], r[1])
  .count(n => numValid(n))

const numValid2 = num => {
  const s = `${num}`
  if (![...s.matchAll(/(.)\1+/g)]
    .some(a => (a[0].length == 2))
  ) return false
  return !s.split('').windowed(2).some(a => a[0] > a[1])
}

const part2 = r => Array
  .range(r[0], r[1])
  .count(n => numValid2(n))

export { numValid, part1, numValid2, part2 }