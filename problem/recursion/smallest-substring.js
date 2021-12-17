function smallestSubstring(str, pattern) {
	const m = {}
	for (let i = 0; i < str.length; i++) {
		const c = str[i]
		m[c] = m[c] || []
		m[c].push(i)
	}

	const m2 = {}
	pattern.split('').sort().forEach(c => {
		m2[c] = m2[c] || 0
		m2[c]++
	})
	
	const adjs = Object.keys(m2).map(c => {
		const choices = m[c] || []
		const needs = m2[c]
		if (needs > choices.length) return []

		let low = -1, high = Infinity, res = []
		for (let k = 0; k <= choices.length - needs; k++) {
			low = choices[k]
			high = choices[k + needs - 1]
			res.push([low, high])
		}
		return res
	})
	
	console.log([m, m2])
	console.table(adjs)

	// not enough choices
	if (adjs.some(v => v.length == 0)) return ''
	
	const gatherRange = (curr) => {
		const r = [Infinity, -Infinity]
		for (const v of curr) {
			r[0] = Math.min(v[0], r[0])
			r[1] = Math.max(v[1], r[1])
		}
		return r
	}
	
	const pn = pattern.length
	let range = [-1, Infinity]
	
	const visit = (curr) => {
		const i = curr.length
		if (i == adjs.length) {
			const r = gatherRange(curr)
			if (r[1] - r[0] < range[1] - range[0]) {
				range = r
			}
			return
		}

		const choices = adjs[i] || []
		choices.forEach(j => {
			visit([...curr, j])
		})
	}
	
	visit([])

	return range[0] < 0 ? '' : str.slice(range[0], range[1]+1)
}

//console.log(smallestSubstring('abcdef', 'fa'))
console.log(smallestSubstring('abcd$ef$axb$c$', '$$abf'))
//console.log(smallestSubstring('abcdefghijklmnopqrstuvwxyz', 'aajjttwwxxzz'))
//console.log(smallestSubstring('a$fuu+afff+affaffa+a$Affab+a+a+$a$bccgtt+aaaacA+++aaa$', 'a+$aaAaaaa$++'))
//console.log(smallestSubstring('14562435612z!8828!193236!336!5$41!23!5!6789901#z2!', '#!2z'))

