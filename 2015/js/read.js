const input = (
  fn, separator = '\n', toNumber = false
) => require('fs')
  .readFileSync(__dirname + '/../' + fn + '.input', 'utf-8')
  .split(separator)
  // .filter(Boolean)
  .map(n => toNumber ? parseInt(n) : n)

export default input
