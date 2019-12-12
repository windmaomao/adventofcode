exports.readFile = (
  fn, separator = '\n', toNumber = false,
) => require('fs')
  .readFileSync(__dirname + '/../' + fn, 'utf-8')
  .split(separator)
  // .filter(Boolean)
  .map(n => toNumber ? parseInt(n) : n);
