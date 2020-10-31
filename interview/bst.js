function Node(key) {
  this.key = key
  this.left = null
  this.right = null
  this.height = 0
}

Node.prototype.add = function(key) {
  if (key < this.key) {
    if (this.left) {
      this.left.add(key)
    } else {
      this.left = new Node(key)
      this.left.height = this.height + 1
    }
  } else {
    if (this.right) {
      this.right.add(key)
    } else {
      this.right = new Node(key)
      this.right.height = this.height + 1
    }
  }
}

function Tree() {
  this.root = null
}

Tree.prototype.add = function(key) {
  if (!this.root) {
    this.root = new Node(key)
  } else {
    this.root.add(key)
  }
}

Tree.prototype.inorder = function(node, visit) {
  if (!node) return
  if (node.left) this.inorder(node.left, visit)
  visit(node)
  if (node.right) this.inorder(node.right, visit)
}

Tree.prototype.preorder = function(node, visit) {
  if (!node) return
  visit(node)
  if (node.left) this.preorder(node.left, visit)
  if (node.right) this.preorder(node.right, visit)
}

Tree.prototype.postorder = function(node, visit) {
  if (!node) return
  if (node.left) this.postorder(node.left, visit)
  if (node.right) this.postorder(node.right, visit)
  visit(node)
}

Tree.prototype.bforder = function(visit) {
  if (!this.root) return
  const arr = [this.root]
  const list = []
  let height = 0
  while (arr.length) {
    const node = arr.shift()
    list.push(node.key)
    if (node.left) arr.push(node.left)
    if (node.right) arr.push(node.right)
  }
  return list
}

Tree.prototype.min = function() {
  let min = null
  let p = this.root
  while (p) {
    min = p.key
    p = p.left
  }
  return min
}

Tree.prototype.max = function() {
  let min = null
  let p = this.root
  while (p) {
    min = p.key
    p = p.right
  }
  return min
}

Tree.prototype.has = function(key) {
  let p = this.root
  while (p) {
    if (p.key === key) {
      return true
    }
    if (key < p.key) {
      p = p.left
    } else {
      p = p.right
    }
  }
  return false
}


const t = new Tree()
t.add(0)
t.add(8)
t.add(5)
t.add(3)
t.add(9)
t.add(-2)
t.add(-3)

//    0
//  -2  8
// -3  5 9
//    3
//t.inorder(t.root, n => { console.log(n.key) })
//t.preorder(t.root, n => { console.log(n.key) })
//t.postorder(t.root, n => { console.log(n.key) })
//console.log(t.min())
//console.log(t.max())
//console.log(t.has(10))
console.log(t.bforder())
