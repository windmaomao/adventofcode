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

const part1 = data => data.filter(strMatch)
const part2 = data => data.filter(strMatch2)
const finish = data => data.length

export default () => ({ part1, part2, finish })