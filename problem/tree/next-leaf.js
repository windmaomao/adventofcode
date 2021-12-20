const Node = (text = '', children = []) => {
	let parent = null
	let node = {
		text,
		children,
		parent
	}
	
	node.appendChild = (child) => {
		children.push(child)
		child.parent = node
	}
	
	node.appendChildren = (children) => {
		children.forEach(node.appendChild)
	}

	return node
}

const nodeA = Node('A. Welcome,')
const root = Node('Root')
const nodeF = Node('F. Hello World.')
const nodeE = Node('E. div')
nodeE.appendChild(nodeF)
const nodeH = Node('H. Item 3')
const nodeG = Node('G. li')
nodeG.appendChild(nodeH)
const nodeD = Node('D. li - Item 2')
const nodeC = Node('C. li - Item 1')
const nodeB = Node('B. ul')
nodeB.appendChildren([nodeC, nodeD, nodeG])
root.appendChildren([nodeA, nodeB, nodeE])

const traverse = () => {
	const preorder = (node) => {
		console.log(node.text)
		node.children.forEach(preorder)
	} 
	preorder(root)
}

console.log('DFS - preorder')
traverse()

const leafs = () => {
	const sibling = (node) => {
		const p = node.parent
		if (!p) return null
		
		const cs = p.children
		const n = cs.length
		const i = cs.indexOf(node)
		return (i+1 < n) ? cs[i+1] : null
	}
	
	const nextLeaf = (node) => {
		let p = node
		while (!sibling(p) && p.parent) {
			p = p.parent
		}
		p = sibling(p)
		if (!p) return null
		
		while (p.children.length) {
			p = p.children[0]
		}
		return p
	}
	
	let s = nodeA
	console.log(s.text)
	while ((s = nextLeaf(s))) {
		console.log(s.text)
	}
}

console.log('Next leaf')
leafs()

//    Root
//   A  B  E 
//     CDG  F
//       H