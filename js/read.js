const input = (
  year, day, separator = '\n', toNumber = false
) => require('fs')
  .readFileSync(
    __dirname + 
    '/../' + year + 
    '/res/' + day + 
    '.input',
    'utf-8'
  )
  .split(separator)
  // .filter(Boolean)
  .map(n => toNumber ? parseInt(n) : n)

module.exports = input