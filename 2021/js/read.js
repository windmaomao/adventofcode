const input = (
  fn, separator = '\n', toNumber = false
) => require('fs')
  .readFileSync(__dirname + '/../input/' + fn + '.input', 'utf-8')
  .split(separator)
  // .filter(Boolean)
  .map(n => toNumber ? parseInt(n) : n)

module.exports = input