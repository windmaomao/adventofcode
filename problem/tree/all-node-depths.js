const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const tree = Node(
	1,
	Node(2, Node(4, Node(8), Node(9)), Node(5)),
	Node(3, Node(6), Node(7))
)

const count = (n, level) => {
	let depths = level
	if (n.left) depths += count(n.left, level + 1)
	if (n.right) depths += count(n.right, level + 1) 
	console.log('count', n.value, level, depths)	
	
	return depths
}

const sumDepth = (n) => {
	let s = count(n, 0)
	if (n.left) s += sumDepth(n.left)
	if (n.right) s += sumDepth(n.right)
	
	return s
}

//console.log(count(tree, 0))
console.log(sumDepth(tree))