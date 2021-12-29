const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const tree = Node(
	15,
	Node(5, Node(2, Node(1), Node(3)), Node(5)),
	Node(20, Node(17), Node(22))
)

const findLargestK = (k) => {
	let res = []
	
	const visit = (n) => {
		if (n.right) visit(n.right)
		res.push(n.value)
		if (n.left) visit(n.left)
	}
	
	visit(tree)
	
	return res[k-1]
} 

findLargestK(3)