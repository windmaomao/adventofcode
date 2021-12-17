const Node = (value, left = null, right = null) => ({ 
  value, left, right
})

// insert a value
const push = (node, v) => {
  let n = node
  let p = null
  
  while (n) {
    if (v < n.value) { 
      p = n
      n = n.left 
    } else {
      p = n
      n = n.right
    }
  }
  
  const added = Node(v)
  if (v < p.value) {
    p.left = added
  } else {
    p.right = added
  }	
}

// how many less than a value
const lessThan = (n, v) => {
  if (!n) return 0	
  
  if (v > n.value) {
    return lessThan(n.left, v) + 1 
    + lessThan(n.right, v)
  } else {
    return lessThan(n.left, v)
  }
}

function rightSmallerThan(arr) {
  const n = arr.length
  if (n < 1) return []
  
  const res = new Array(n).fill(0)
  if (n < 2) return res
  
  const root = Node(arr[n - 1])
  for (let i = arr.length - 2; i >= 0; i--) {
    res[i] = lessThan(root, arr[i])
    push(root, arr[i])
  }
  
  return res
}

console.log(rightSmallerThan([8,5,11,-1,3,4,2]))
