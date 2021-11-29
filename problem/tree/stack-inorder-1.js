const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const tree = Node(
	1,
	Node(2, Node(4, null, Node(9))),
	Node(3, Node(6), Node(7))
)


const traversal = (callback) => {
	const s = []
	let n = tree
	
	do {
		while (n) {
			s.push(n)
			n = n.left
		}
		
//	console.log(s.map(d => d.value))
		n = s.pop()
		callback(n)
		n = n.right
	} while (s.length || n)
}


traversal(n => { console.log(n.value) }) 