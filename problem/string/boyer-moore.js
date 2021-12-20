function bm(pat, r, key) {
	const m =  pat.length
	const right = new Array(r).fill(-1)
			
	for (let j = 0; j < m; j++) {
		right[key(pat[j])] = j
	}
	
	return right
}

//console.log(bm(
//'ababac', 3, c => c.charCodeAt(0) - 97
//))

function match(str, pat) {
	const m = pat.length
	const n = str.length
	const key = c => c.charCodeAt(0)
	const right = bm(pat, 255, key)

	const search = () => {
		let skip = 0
		for (let i = 0; i <= n-m; i += skip) {
			skip = 0
			for (let j = m-1; j >= 0; j--) {
				if (pat[j] != str[i+j]) {
					skip = j - right[key(str[i+j])]
					if (skip < 1) skip = 1
					break
				}
			}
			if (skip == 0) return i
		}
		return -1
	}
	
	return search()	
}

//console.log(match('abababacc', 'ababac'))
console.log(match('tesseatesgawatewtesaffawgfawtteafawtesftawfawfawfwfawftest', 'test'))

