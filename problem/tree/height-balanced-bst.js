const Node = (value, left = null, right = null) =>
	({ value, left, right })

const tree = Node(
	1,
	Node(2, 
		Node(4), 
		Node(5, Node(7), Node(8))
	),
	Node(3, null, Node(6))
)

function heightBalanced(root) {
	const height = (n) => {
		if (!n) return 0
		
		let l = height(n.left)
		let r = height(n.right)
		
		if (Math.abs(l-r) > 1) balanced = false
		return Math.max(l, r) + 1
	}
	
	let balanced = true
	height(root)
	return balanced
}

console.log(heightBalanced(tree))