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

//const h = Heap([4,16,10,14,7,9,3,2,8,1])
//h.heapify(0)
//const h = Heap([4,1,3,2,16,9,10,14,8,7])
//h.build()
//console.log(h.arr)
//console.log(h.pop())
//console.log(h.arr)
//const h = Heap([16,14,10,8,7,9,3,2,4,1])
//h.push(15)
//console.log(h.arr)
const h = Heap([4,16,10,14,7,9,3,2,8,1])
h.build()
console.log(h.sort())
//const h = Heap([])
//h.push(5)
//h.push(10)
//h.push(100)
//console.log(h.arr)
//const h = Heap([3,2,1,5,4,7,6,5])
//h.build()
//console.log(h.arr)
