const Node = (value, next = null) => ({ 
	value, next
})

const head = Node(1, Node(1, Node(3, Node(4,
	Node(4, Node(4, Node(5, Node(6)))))
)))


function removeDuplicates(root) {
	let n = root
	let p = root
	while (n) {
		if (p && n.value == p.value) {
			p.next = n.next
		} else {
			p = n
		}
		
		n = n.next
	}
	
	display(root)
	return root
}

function display(root) {
	let n = root
	let arr = []
	while (n) {
		arr.push(n.value)
		n = n.next
	}
	console.log(arr.join('>'))
}

console.log(removeDuplicates(head))