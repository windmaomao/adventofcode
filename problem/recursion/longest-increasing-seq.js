function longestIncreasing(array) {
  const n = array.length
  const indices = new Array(n).fill(0).map((_, i) => i)
  const choices = arr => {
    if (arr.length) {
      const prev = arr[arr.length - 1]
      const prevValue = array[prev]
      
      return indices.filter(i => {
        if (i <= prev) return false
        return array[i] > prevValue
      })
    }
    return indices
  }
  
  // with arr taken, return arr with max length
  const visit = (arr) => {
    let res = arr
//  console.log(arr)
    
    if (arr.length < n) {
      choices(arr).forEach(i => {
        const next = visit([...arr, i])
        if (next.length > res.length) {
          res = [...next]
        }
      })
    }
    
    return res
  }
  
  return visit([]).map(i => array[i])
}


console.log(longestIncreasing([5,7,-2]))
console.log(longestIncreasing([5,7,-24,12,10,2,3,12,5,6,35]))

