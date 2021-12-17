function underscore(str, substr) {
	const n = str.length, m = substr.length
	
	const match = i => {
		if (i + m > n) return false
		
		for (let j = 0; j < m; j++) {
			if (str[i+j] != substr[j]) return false
		}
		
		return true
	}
	
	let k = 0, matching = false, active = 0
	let res = [], prev = false
	while (k < n) {
		if (match(k)) {
			matching = true
			active = m - 1
		} else {
			if (active && matching) {
				active--
			} else {
				matching = false
			}
		}
		
		if (prev != matching) {
			res.push('_')
			prev = matching
		}
		res.push(str[k])
				 
//	console.log(str[k], matching, active)
				
		k++
	}
	if (matching) res.push('_')
	
	return res.join('')
}

console.log(underscore('testthis is a testtest to see if testestest it works', 'test'))