const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const tree = Node(
	1,
	Node(2, Node(4, Node(8), Node(9)), Node(5, null, Node(10))),
	Node(3, Node(6, Node(11, Node(14))), Node(7, Node(12), Node(13)))
)

const heapify = () => {
	const h = {}
	
	const visit = (n, i) => {
		if (!n) return
		const l = 2 * i + 1
		
		h[i] = n
		visit(n.left, l)
		visit(n.right, l+1)		
	}
	
	visit(tree, 0)
	return h
}

const connect = (h) => {
	const size = Math.max(...Object.keys(h).map(v => parseInt(v))) + 1
	let i = 0
	let j = 1
	
	while (i < size) {
		for (let k = 0; k < j - 1; k++) {
			const n = h[i + k]
			const n2 = h[i + k + 1]
			if (n && n2) {
				console.log(n.value, n2.value)
				n.right = n2
			} 
		}
		const n = h[i + j - 1]
		if (n) {
			n.right = null
			console.log(n.value, null)
		}
		
		i += j
		j *= 2
	}
}

connect(heapify())
console.log(tree)

