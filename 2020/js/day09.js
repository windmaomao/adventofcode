const read = require('./read.js')
const arr = read('09')




const part1 = arr => {
  const m = {}
  const pre = 25
  
  const isValid =  (target, i) => {
    for (let k = i - 1; k > 0; k--) {
      const tmp = target - arr[k]
      if (m[tmp] && m[tmp] < k && m[tmp] >= i - pre) return [arr[k], tmp]
    }
    return false
  }
  
  let i = 0, valid = true
  while (i < arr.length && valid) {
    const n = arr[i]
    if (i >= pre) valid = isValid(n, i)
//    console.log(i, n, valid)
    m[n] = i
    i++
  }
  
  return valid ? true : arr[i-1]
}

console.log(part1(arr))
