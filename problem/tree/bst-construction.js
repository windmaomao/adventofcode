const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

//const tree = Node(
//10,
//Node(5, Node(2, Node(1)), Node(5)),
//Node(15, Node(13, null, Node(14)), Node(22))
//)

const tree = Node(1)

const insert = (v) => {
	let n = tree
	let p = null

	while (n) {
		if (v < n.value) { 
			p = n
			n = n.left 
		} else {
			p = n
			n = n.right
		}
	}
	
	const added = Node(v)
	if (v < p.value) {
		p.left = added
	} else {
		p.right = added
	}	
}

// https://www.journaldev.com/23086/binary-search-tree-bst-search-insert-remove
const remove = (v) => {
	
	const successorValue = (root) => {
		let v = root.value
		while (root.left) {
			v = root.left.value
			root = root.left
		}
		return v
	}
	
	const genTree = (root, value) => {
		if (!root) return root
		
		if (value < root.value) {
			root.left = genTree(root.left, value)
		} else if (value > root.value) {
			root.right = genTree(root.right, value)
		} else {
			if (root.left == null) {
				return root.right
			} else if (root.right == null) {
				return root.left
			}
			
			root.value = successorValue(root.right)
			root.right = genTree(root.right, root.value)
		}
		return root
	}
	
	return genTree(tree, v)
}

const contains = (v) => {
	let found = null
	
	const visit = (n) => {
		if (!n) return
		if (n.value === v) {
			found = n
		} else {
			visit(n.left)
			visit(n.right)
		}
	}
	
	visit(tree)
	
	return !!found	
}

//insert(5)
//insert(15)
//insert(2)
//insert(5)
//insert(13)
//insert(22)
//insert(1)
//insert(14)
//insert(12)
insert(2)
insert(3)
insert(4)
console.log(remove(1))
console.log(tree)