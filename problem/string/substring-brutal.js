function match(str, pattern) {
	let k = 0
	
	function search() {
		const n = str.length, m = pattern.length
		for (let i = 0; i <= n - m; i++) {
			let j
			for (j = 0; j < m; j++) {
				k++
				if (str[i+j] != pattern[j]) break
			}
			if (j == m) return i
		}
		return -1
	}
	
	const res = search()
	console.log('n:', str.length, 'k:', k)
	return res
}

console.log(match('ABCAACDB', 'AAC'))

function match2(str, pattern) {
	let k = 0
	function search() {
		const n = str.length, m = pattern.length
		let i, j
		for (i = 0, j = 0; i < n && j < m; i++) {
			k++
			if (str[i] == pattern[j]) {
				j++
			} else {
				i -= j
				j = 0
			}
		}
		
		return j == m ? i - m : -1
	}

	const res = search()
	console.log('n:', str.length, 'k:', k)
	return res
}

console.log(match2('ABCAACDB', 'AAC'))

