const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const tree = Node(
	10,
	Node(5, Node(2, Node(1)), Node(5)),
	Node(15, Node(13, null, Node(14)), Node(22))
)

function findClosestValue(node, value) {
	const closer = (v1, v2) => {
		const [a, b] = [
			Math.abs(v1 - value), 
			Math.abs(v2 - value)
		]
		return a < b ? v1 : v2
	}
	
	const closerValue = (n) => {
		let res = n.value
		if (value < n.value && n.left) {
			res = closer(res, closerValue(n.left))
		} else if (value > n.value && n.right) {
			res = closer(res, closerValue(n.right))
		}
		return res
	}
	
	return closerValue(node)
}

console.log(findClosestValue(tree, 12))
