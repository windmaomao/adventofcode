const Node = (value, left = null, right = null) =>
	({ value, left, right })

const n4 = Node(4, Node(6))
const n2 = Node(2, n4, Node(5))
const n3 = Node(3)
const tree = Node(1, n2, n3)

function findSuccessor(root, s) {
	return null
}

// TOBE done, inorder dfs
console.log(findSuccessor(tree, n2))