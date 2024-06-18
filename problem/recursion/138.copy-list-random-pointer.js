function copyRandomList(head) {
  let m = new Map()
  
  function clone(node) {
    if (!node) return null
    
    if (m.has(node)) return m.get(node)
    
    let cloned = new Node(node.val, null, null)
    cloned.next = clone(node.next)
    cloned.random = clone(node.random)
    
    m.set(node, cloned)
    return cloned
  }
  
  return clone(head)
