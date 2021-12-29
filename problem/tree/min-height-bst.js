const Node = (value, left=null, right=null) => ({ 
	value, left, right
})

function minHeightBst(arr) {
	const buildTree = (i, j) => {
		if (i > j) return null
		const m = Math.floor((i + j) / 2)
		
		return Node(
			arr[m],
			buildTree(i, m-1),
			buildTree(m+1, j)
		)
	}
	
	return buildTree(0, arr.length - 1)
}

const tree = minHeightBst([1,2,5,7,10,13,14,15,22])
console.log(tree)