const Node = (value, left = null, right = null) =>
	({ value, left, right })

const tree = Node(
	1,
	Node(3, 
		Node(7, Node(8, Node(9))), 
		Node(4, null, Node(5, null, Node(6)))
	),
	Node(2)
)

function bstDiameter(tree) {
	const maxLen = (n) => {
		if (!n) return 0
		
		let l = maxLen(n.left)
		let r = maxLen(n.right)
		let d  = Math.max(l, r) + 1
		let m = l+r
		if (m > largest) largest = m
		return d
	}
	
	let largest = 0
	maxLen(tree)
	return largest
}

console.log(bstDiameter(tree))