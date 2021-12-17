function firstNonRepeating(str) {
	const n = 255
	const counts = new Array(n).fill(0)
		.map(_ => [0, 0])
	
	for (let i = 0; i < str.length; i++) {
		const k = str.charCodeAt(i)
		
		counts[k][0]++
		counts[k][1] = i
	}
	
	let m = Infinity
	for (let i = 0; i < n; i++) {
		if (counts[i][0] == 1) {
			if (counts[i][1] < m) {
				m = counts[i][1]
			}
		}
	}
	
	return m == Infinity ? -1 : m
}

console.log(firstNonRepeating('abcdcaf'))
