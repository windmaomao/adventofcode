const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const node3 = Node(3)
const node2 = Node(2, Node(1, Node(0)), Node(4, node3))
const node5 = Node(
	5,
	node2,
	Node(7, Node(6), Node(8))
)

function validateThreeNodes(n1, n2, n3) {
	
	const foundChild = (n, target) => {
		if (!n) return false
		if (n == target) return true
		
		return target.value > n.value 
			? foundChild(n.right, target) 
			: foundChild(n.left, target)
	}
	
	const foundParent = (n, target) => {
		return foundChild(target, n)
	}
	
	if (foundChild(n2, n3) && foundParent(n2, n1)) {
		return true
	}
	
	if (foundChild(n2, n1) && foundParent(n2, n3)) {
		return true
	}
	
	return false
}

console.log(validateThreeNodes(node5, node2, node3))
