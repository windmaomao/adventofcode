import '../../utils/js/array'

const memStr = str => str
  .replace(/^\"/g, "")
  .replace(/\"$/g, "")
  .replace(/\\[\\\"]/g, " ")
  .replace(/\\x../g, " ")


const diff = str => str.length - memStr(str).length
const part1 = list => list
  .map(diff)
  .sum()

const encodeStr = str => str
  .replace(/[\\\"]/g, "  ")

const diff2 = str => encodeStr(str).length - str.length + 2
const part2 = list => list
  .map(diff2)
  .sum()

export { diff, diff2, part1, part2 }