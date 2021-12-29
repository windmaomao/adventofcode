const productSum = array => {

	const sum = (item, lvl) => {
		if (!Array.isArray(item)) return item
		
		return item.reduce((acc, v) => {
			return acc + sum(v, lvl + 1) * lvl 
		}, 0)
	}

	return sum(array, 1)	
}


console.log(productSum([1,2,[1, 2]]))
console.log(productSum([5,2,[7,-1],3,[6,[-13,8],4]]))

function productSum2(array) {
	const sum = (arr, lvl) => {
		return arr.reduce((acc, v) => {
			if (!Array.isArray(v)) return acc + v
			return acc + lvl * sum(v, lvl+1)
		}, 0)
	}
	
	return sum(array, 2)
}

console.log(productSum2([1,2,[1, 2]]))
console.log(productSum2([5,2,[7,-1],3,[6,[-13,8],4]]))

