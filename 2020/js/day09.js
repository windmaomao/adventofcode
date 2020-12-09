const read = require('./read.js')
const arr = read('09').map(v => parseInt(v))

const part1 = (pre, arr) => {
  const m = {}
  
  const isValid =  (target, i) => {
    for (let k = i - 1; k > 0; k--) {
      const tmp = target - arr[k]
      if (m[tmp] && m[tmp] < k && m[tmp] >= i - pre) return [k, m[tmp]]
    }
    return false
  }
  
  let i = 0, valid = true
  while (i < arr.length && valid) {
    const n = arr[i]
    if (i >= pre) valid = isValid(n, i)
    console.log(i, n, valid)
    m[n] = i
    i++
  }
  
  return valid ? true : arr[i-1]
}

const part2 = (target, arr) => {
  const n = arr.length
  for (i = 0; i < n; i++) {
    const tmp = arr[i]
    const m = Math.floor(target / tmp + 2)
//    console.log(tmp, m)
    let k = i, sum = 0, res = []
    while (k < i + m && sum < target) {
      sum += arr[k]
      res.push(arr[k])
//      console.log(i, k, sum)
      if (sum == target) return res
      k++
    }
    console.log(i, k, sum)
  }
  return []
}

//console.log(part1(25, arr))
//console.log(part2(127, arr))
const m = part2(32321523, arr)

console.log(m, Math.min(...m) + Math.max(...m))


// 10, 3
// 523 is invalid