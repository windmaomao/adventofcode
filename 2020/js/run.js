const separator = new Array(32).fill('-').join('')
const run = (fn, ...args) => {
  const name = 'time' // 
  console.time(name)
  console.log(separator)
  console.log(fn.name)
  console.log()
  const res = fn(...args)
  console.log(res)
  console.log()
  console.timeEnd(name)
  return res
}

module.exports = run

//function abc(n) {
//  console.log(n)
//  for (let i = 0; i < n; i++) {
//    const b = Math.pow(i, 2)
//  }
//  return 0
//}
//
//run(abc, 3000000000)