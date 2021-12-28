const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const tree = Node(
	1,
	Node(2, Node(4, Node(8), Node(9)), Node(5)),
	Node(3, Node(6), Node(7))
)

function nodeDepths(root) {
	const sum = (n, d) => {
		let res = d
		
		if (n.left) res += sum(n.left, d + 1)
		if (n.right) res += sum(n.right, d + 1)
		
		return res
	}
	
	return sum(root, 0)
}

console.log(nodeDepths(tree))