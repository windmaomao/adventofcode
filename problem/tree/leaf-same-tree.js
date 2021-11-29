const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const tree = Node(
	1,
	Node(2, Node(4), Node(5, Node(7), Node(8))),
	Node(3, null, Node(6))
)


const allLeafs = (head) => {
	const res = []
	const visit = (n) => {
		if (!n) return
		
		if (!n.left && !n.right) {
			res.push(n.value)
		}
		visit(n.left)
		visit(n.right)
	}
	
	visit(head)
	return res
}

console.log(allLeafs(tree))

