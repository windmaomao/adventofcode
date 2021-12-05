const detectArbitrage = (rates) => {
	const n = rates.length
	const res = []
	let m = 1
	let detected = null
	
	const visit = (i, p) => {
		res.push(i)
		m *= rates[p][i]
		
		if (res.length > 1) {
			const o = res[0]
			const m2 = m * rates[i][o]
			const dm = m2 - 1
			if (dm > 0.001) {
				detected = [[...res], dm]
			}
		}
		
		if (res.length < n) {
			rates.forEach((_, j) => {
				if (res.indexOf(j) < 0) visit(j, i)
			})
		}
		
		m /= rates[p][i]
		res.pop()
	}
	
	visit(0, 0)
	
	return detected
}

console.log(detectArbitrage([
	[1, 0.8631, 0.5903],
	[1.1586, 1, 0.6849],
	[1.6939, 1.46, 1]
]))

console.log(detectArbitrage([
	[1, 2],
	[0.5, 1],
]))