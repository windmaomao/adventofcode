const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const tree = Node(
	1,
	Node(2, Node(4, Node(8), Node(9)), Node(5)),
	Node(3, Node(6), Node(7))
)

function branchSums(root) {
	const visit = (n, s) => {
		let res = s + n.value
		if (!n.left && !n.right) {
			arr.push(res)
		} else {
			if (n.left) visit(n.left, res)
			if (n.right) visit(n.right, res)
		}
	}
	
	const arr = []
	visit(root, 0)
	return arr
}

console.log(branchSums(tree))