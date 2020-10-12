const input = (
  fn, separator = '\n', toNumber = false
) => require('fs')
  .readFileSync(__dirname + '/../inputs/day' + fn + '.data', 'utf-8')
  .split(separator)
  // .filter(Boolean)
  .map(n => toNumber ? parseInt(n) : n)

export default input
