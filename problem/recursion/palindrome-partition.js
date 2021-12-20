function palindromePartition(str) {
	const n = str.length
	
	const isPalindrome = (i, j) => {
		while (i < j) {
			if (str[i] != str[j]) return false
			i++
			j--
		}
		return true
	}
	
	const preparePalindrome = () => {
		const cmap = {}
		str.split('').forEach((c, i) => {
			cmap[c] = cmap[c] || []
			cmap[c].push(i)
		})
		
		const pmap = new Array(n).fill([])
		for (let i = 0; i < n; i++) {
			pmap[i] = cmap[str[i]].filter(j => j >= i)
			  .filter(j => isPalindrome(i, j))
		}
		
		return pmap
	}
	
	
	const cuts = preparePalindrome()
	
	// given chosen, return min number of cuts
	const visit = (arr) => {
		let res = Infinity
		const an = arr.length
		
		const prev = arr[an - 1]
		if (prev == n) {
			res = an - 1
		} else {
			cuts[prev].forEach(i => {
				const next = visit([...arr, i+1])
				res = Math.min(res, next)
			})
		}
		
		return res
	}
	
	return visit([0])	- 1
}

console.log(palindromePartition('abcdefghijklmonpqrstuvwxyz'))