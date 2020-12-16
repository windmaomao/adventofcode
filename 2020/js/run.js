const sep = new Array(8).fill('-').join('')
const run = (fn, ...args) => {
  const name = ':' 
  console.time(name)
  console.log(`${sep} ${fn.name} ${sep}`)
  const res = fn(...args)
  console.log(res)
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
//run(abc, 3000000)