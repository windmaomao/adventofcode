function kmp(pat, r, key) {
	const m =  pat.length
	const dfa = new Array(r).fill(0)
		.map(v => new Array(m).fill(0))
			
	dfa[key(pat[0])][0] = 1
	for (let x=0, j=1; j < m; j++) {
		for (let c = 0; c < r; c++) {
			dfa[c][j] = dfa[c][x]
		}
		const k = key(pat[j])
		dfa[k][j] = j + 1
		x = dfa[k][x]
	}
	
	return dfa
}

//console.log(kmp(
//'ababac', 3, c => c.charCodeAt(0) - 97
//))

//console.log(("a")[0].charCodeAt(0))

function match(str, pat) {
	const n = str.length
	const m = pat.length
	const key = c => c.charCodeAt(0)
	const dfa = kmp(pat, 255, key)
	
	const search = () => {
		let i, j
		for (i = 0, j = 0; i < n && j < m; i++) {
			j = dfa[key(str[i])][j]
//		console.log(i, key(str[i]), j)
		}
		return (j == m) ? i - m : -1
	}
	
	return search()
}

console.log(match('aababacaacdb', 'ababac'))
