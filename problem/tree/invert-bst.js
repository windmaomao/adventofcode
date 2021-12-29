const Node = (value, left = null, right = null) => ({ value, left, right })

const tree = Node(
	1,
	Node(2, Node(4, Node(8), Node(9)), Node(5)),
	Node(3, Node(6), Node(7))
)

function invertBst(n) {
	if (!n) return null
	
	const tmp = n.left
	n.left = invertBst(n.right)
	n.right = invertBst(tmp)
	return n
}

console.log(invertBst(tree))