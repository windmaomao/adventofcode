const Node = (value, left = null, right = null) => ({ 
	value, left, right, parent: null
})

const tree = Node(
	1,
	Node(2, Node(4), Node(5)),
	Node(3, null, Node(6, Node(7), Node(8)))
)

const findDistanceK = (target, k) => {
	let src
	const prepare = (n, parent) => {
		if (!n) return
		if (n.value === target) src = n
		n.parent = parent
		if (n.left) prepare(n.left, n)
		if (n.right) prepare(n.right, n)
	}

	prepare(tree, null)
	
	const queue = [[src, 0]]
	const used = [src]
	const res = []
	
	const enqueue = (n, d) => {
		if (!n) return
		if (used.indexOf(n) >= 0) return
  	queue.push([n, d])
	  used.push(n)
	}
	
	while (queue.length) {
		const [n, d] = queue.shift()
		if (d == k) {
			res.push(n.value)
		} else {
			enqueue(n.left, d+1)
			enqueue(n.right, d+1)
			enqueue(n.parent, d+1)
		}
	}
	
	console.log(res)
} 

findDistanceK(3, 2)