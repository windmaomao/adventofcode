const log = require('./log.js')

const sep = new Array(8).fill('-').join('')
const run = (fn, ...args) => {
  const name = ':'
  console.time(name)
  console.log(`${sep} ${fn.name} ${sep}`)
  const res = fn(...args)
  log(res)
  console.timeEnd(name)
  return res
}

module.exports = run