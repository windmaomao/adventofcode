const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const tree = Node(
	1,
	Node(2, Node(4), Node(5, Node(7), Node(8))),
	Node(3, Node(6))
)

const flatten = () => {
	let head
	let prev = null
	
	const visit = n => {
		if (!n) return
		
		visit(n.left)
		if (prev) {
			prev.right = n
			n.left = prev
			prev = n
		} else {
			head = n
			head.left = null
			prev = head
		}
		visit(n.right)
	}
	
	visit(tree)
	if (prev) prev.right = null
	
	return head
}


const print = (t) => {
	let n = t
	while (n) {
		console.log(n.value)
		n = n.right
	}
}

print(flatten())