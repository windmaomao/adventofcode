const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const tree = Node(
	10,
	Node(5, Node(2, Node(1)), Node(5)),
	Node(15, Node(13, null, Node(14)), Node(22))
)

function validateBst(root) {
	const merge = (r1, r2) => ([
		Math.min(r1[0], r2[0]),
		Math.max(r1[1], r2[1])
	])
	
	const range = (n) => {
		let res = [n.value, n.value]
		if (n.left) {
			let lrange = range(n.left)
			if (n.value <= lrange[1]) isBST = false
			res = merge(res, lrange)
		}
		if (n.right) {
			let rrange = range(n.right)
			if (n.value > rrange[0]) isBST = false
			res = merge(res, rrange)
		}
		
		console.log(n.value, res)
		return res
	}
	
	let isBST = true
	range(root)
	return isBST
}

function validateBst2(root) {
	const validate = (n, low, high) => {
		if (!n) return true
		const v = n.value
		if (v < low || v >= high) return false
		
		return validate(n.left, low, n.value)
		  && validate(n.right, n.value, high)		
	}
	
	return validate(root, -Infinity, Infinity)
}

console.log(validateBst2(tree))

