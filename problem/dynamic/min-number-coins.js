const minNumberCoins = (n, denoms) => {
	const res = new Array(n + 1).fill(-1)
	res[0] = 0
	
	let i = 0
	while (i < denoms.length) {
		
		const coin = denoms[i]
		for (let k = 1; k < res.length; k++) {
			if (k >= coin) {
				const left = k - coin
				if (res[left] >=0) {
					const n = res[left] + 1
					if (res[k] < 0 || res[k] > n) {
						res[k] = n
					}
				}
			}
		}
		
		console.log(res)
		i++
	}
	
	
	return res
}

minNumberCoins(9, [3, 5])