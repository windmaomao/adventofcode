const { log } = console

function longest(str) {
	const n = str.length
	const m = {}
	const dups = new Array(n).fill(-1)
	
	for (let i = 0; i < n; i++) {
		const c = str[i]
		if (m[c] != undefined) {
			dups[m[c]] = i
		}
		m[c] = i
	}
	
//console.log(dups)
		
	let max = 0, high = n, maxi = -1
	for (let i = n - 1; i >= 0; i--) {
		if (dups[i] >= 0) high = Math.min(dups[i], high)
		const count = high - i
		console.log(str[i], count)
		if (count > max) {
			max = count
			maxi = i
		}
	}
	
	return str.slice(maxi, maxi + max)
}

//log(longest('clementisacap'))
//log(longest('abccdeaabbcddef'))
log(longest('abacacacaaabacaaaeaaafa'))