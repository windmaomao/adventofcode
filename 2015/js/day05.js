import '../../utils/js/array'
import '../../utils/js/string'

const strMatch = str => {
  if (str.match(/ab|cd|pq|xy/)) return false
  if (!str.match(/([a-z])\1/)) return false
  return str.scan(/[aeiou]/g).length > 2
}

const strMatch2 = str => {
  if (!str.match(/(\w.)\w*\1/)) return false
  if (!str.match(/([a-z]).\1/)) return false
  return true
}

const part1 = strs => strs
  .count(strMatch)

const part2 = strs => strs
  .count(strMatch2)

export { strMatch, strMatch2, part1, part2 }