const abs = Math.abs

function sort(arr) {
  const n = arr.length
  let res = arr.slice()
  
  if (n >= 2) {
    let i = n - 1, j = 0, k = n - 1
    
    while (i >= j) {
      if (abs(arr[i]) > abs(arr[j])) {
        res[k] = arr[i]
        k--
        i--
      } else {
        res[k] = arr[j]
        k--
        j++
      }
    }
  }
  
  return res.map(v => v*v)
}

console.log(sort([-2, -1, 0, 1]))
//                    ji 