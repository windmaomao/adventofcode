const Tries = (
	R = 256, index = (c => c.charCodeAt(0))
) => {
	let root = null
	
	const Node = val => ({
		val,
		next: new Array(R).fill(null)
	})

	const getNode = (x, key, d) => {
		if (x == null) return null
		if (d == key.length) return x
		const k = index(key[d])
		return getNode(x.next[k], key, d+1)
	}
	
	const getVal = (key) => {
		const x = getNode(root, key, 0)
		return (x == null) ? null : x.val
	}
	
	const putNode = (x, key, val, d) => {
		if (x == null) x = Node()
		if (d == key.length) {
			x.val = val
			return x
		}
		const k = index(key[d])
		x.next[k] = putNode(x.next[k], key, val, d+1)
		return x
	}
	
	const setVal = (key, val) => {
		root = putNode(root, key, val, 0)
	}
	
	return {
		root,
		getNode,
		putNode,
		getVal,
		setVal
	}
}

const t = Tries(3, c => c.charCodeAt(0) - 97)
t.setVal('a', 3)
t.setVal('abc', 9)
console.log(t.getVal('a'))
console.log(t.getVal('abc'))