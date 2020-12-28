const dirs = {
  '2019': 'inputs/day',
  '2018': 'input/'
}
const exts = {
  '2020': '.input',
  '2019': '.data',
  '2018': '',
  '2017': '.input',
  '2016': '.input',
  '2015': '.input',

}
const input = (
  year, day, separator = '\n', toNumber = false
) => require('fs')
  .readFileSync(
    __dirname + 
    '/../../../' + year + 
    `/${dirs[year] || 'res/'}` + day + 
    `${exts[year]}`,
    'utf-8'
  )
  .split(separator)
  // .filter(Boolean)
  .map(n => toNumber ? parseInt(n) : n)

module.exports = input