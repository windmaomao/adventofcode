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
    
    if (l < size) {
      let m = i
      if (comp(arr[i], arr[l]) > 0) { m = l }
      if (comp(arr[m], arr[r]) > 0) { m = r }
      if (m != i) { 
        _swap(m, i)
        heapify(m)
      }
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
    while (i >= 0 && comp(arr[p], v) > 0) {
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
  
  function size() {
    return arr.length
  }
  
  return {
    arr,
    heapify,
    build,
    pop,
    push,
    peek,
    empty,
    size,
    sort
  }
}


//const h = Heap([])
//h.push(5)
//h.push(10)
//h.push(100)
//console.log(h.arr)

const minH = Heap([])
const maxH = Heap([], (a, b) => b - a)

function insert(v) {
  if (!minH.empty() && v < minH.peek()) {
    maxH.push(v)
    if (maxH.size() > minH.size() + 1) {
      minH.push(maxH.pop())
    }
  } else {
    minH.push(v)
    if (minH.size() > maxH.size() + 1) {
      maxH.push(minH.pop())
    }
  }
}

function median() {
  const mins = minH.size()
  const maxs = maxH.size()
  if (mins < maxs) { return maxH.peek() }
  if (mins > maxs) { return minH.peek() }
  return (maxH.peek() + minH.peek()) / 2
}

insert(5)
console.log(median())
insert(10)
console.log(median())
insert(100)
console.log(median())
