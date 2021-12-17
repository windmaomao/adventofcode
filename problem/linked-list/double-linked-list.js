class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  setHead(node) { 
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.insertBefore(this.head, node)
    }
  }
  
  setTail(node) {
    if (this.tail === null) {
      this.setHead(node)
    } else {
      this.insertAfter(this.tail, node)
    }
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head
      && nodeToInsert === this.tail) return
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
  }

  remove(node) {
    // Write your code here.
  }

  containsNodeWithValue(value) {
    // Write your code here.
  }
}

const printList = (list) => {
  const res = []
  let node = list.head
  if (!node) return
  
  do {
    res.push(node.value)
  } while (node = node.next)
  console.log(res)
}

const l = new DoublyLinkedList()
l.insertAtHead(new Node(3))
l.insertAtHead(new Node(8))
printList(l)