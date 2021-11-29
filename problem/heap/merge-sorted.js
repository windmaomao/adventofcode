function Heap(_arr, comp = (a,b)=>a-b) {
  let arr = [..._arr]
  
  function _swap(c, i) {
    const tmp = arr[i]
    arr[i] = arr[c]
    arr[c] = tmp
    heapify(c)
  }
  
  function heapify(i) {
    const l = 2 * (i + 1) - 1
    const r = 2 * (i + 1)
    const size = arr.length
    
    function _swap(a, b) {
      const tmp = arr[a]
      arr[a] = arr[b]
      arr[b] = tmp
    }
    
    let m = i
    if (l < size) {
      if (comp(arr[i], arr[l]) > 0) { m = l }
    }
    if (r < size) {
      if (comp(arr[m], arr[r]) > 0) { m = r }
    }
    if (m != i) { 
      _swap(m, i)
      heapify(m)
    }
  }
  
  function build() {
    const size = arr.length
    let i = Math.floor(size / 2) - 1
    while (i >= 0) {
      heapify(i)
      i--
    }
  } 
  
  function pop() {
    const size = arr.length
    if (size === 0) return undefined
    
    const m = arr[0]
    const n = arr.pop()
    
    if (size > 1) {
      arr[0] = n
      heapify(0)
    }
    
    return m
  }
  
  function push(v) {
    arr.push(v)
    if (arr.length === 1) return
    const _parent = i => Math.ceil(i / 2) - 1
    
    let i = arr.length - 1
    let p = _parent(i)
    while (i > 0 && comp(arr[p], v) > 0) {
      arr[i] = arr[p]
      i = p
      p = _parent(i)
    }
    arr[i] = v
  }
  
  function sort() {
    const sorted = []
    const size = arr.length
    for (let i = 0; i < size; i++) {
      sorted.push(pop())
    }
    return sorted
  }
  
  function peek() {
    return arr[0]
  }
  
  function empty() {
    return arr.length === 0
  }
  
  return {
    arr,
    heapify,
    build,
    pop,
    push,
    peek,
    empty,
    sort
  }
}

const arrs = [
  [1,5,9,21],
  [-1,0],
  [-124,81,121],
  [3,6,12,20,150]
]
console.log(arrs)

function sort() {
  const is = arrs.map(v => 0)
  
  const h = Heap([], (i, j) => {
    if (is[i] < arrs[i].length && is[j] < arrs[j].length) {
      return arrs[i][is[i]] - arrs[j][is[j]]
    }
    return 0
  })
  
  for (let i = 0; i < arrs.length; i++) {
    if (is[i] < arrs[i].length) {
      h.push(i)
    }
  }
  
  const res = []
  
  while (!h.empty()) {
    const k = h.pop()
    res.push(arrs[k][is[k]])

    is[k]++
    if (is[k] < arrs[k].length) {
      h.push(k)
    }
  }
  
  return res
}

console.log(sort())