const isPalindrome = (str, i, j) => {
  while (i <= j) {
    if (str[i] !== str[j]) return false 
    i++
    j--
  }
  return true
}


const longest = (str) => {
  const m = {}
  const chars = str.split('')
  chars.forEach((c, i) => {
    m[c] = m[c] || []
    m[c].push(i)
  })
  
  let res = ""
  let pmax = 1
  chars.forEach((c, i) => {
    const list = m[c]
    for (let j = 0; j < list.length; j++) {
      const pc = list[j] - i + 1
      if (pc >= 1) {
        if (isPalindrome(str, i, list[j])) {
          if (pc > pmax) {
            pmax = pc
            res = str.substring(i, list[j] + 1)
          }
        }
      }
    }
  })
  
  return res
}

console.log(longest('abaxyzzyxf'))