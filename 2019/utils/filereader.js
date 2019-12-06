exports.readFile = (
  fn, toNumber = false, separator = '\n', 
) => require('fs')
  .readFileSync(__dirname + fn, 'utf-8')
  .split(separator)
  .filter(Boolean)
  .map(n => toNumber ? parseInt(n) : n);
