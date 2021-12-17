function levenshtein(str1, str2) {
	const m = str1.length + 1
	const n = str2.length + 1
	const mat = new Array(m).fill(0).map(() => 
		new Array(n).fill(0)
	)
	
	for (let i = 0; i < m; i++) {
		mat[i][0] = i
	}
	for (let j = 0; j < n; j++) {
		mat[0][j] = j
	}
	
	for (let i = 1; i < m; i++) {
		const ic = str1[i-1]
		for (let j = 1; j < n; j++) {
			const jc = str2[j-1]
			if (ic == jc) {
				mat[i][j] = mat[i-1][j-1]
			} else {
				mat[i][j] = Math.min(
					mat[i-1][j],
					mat[i][j-1],
					mat[i-1][j-1]
				) + 1
			}
		}
	}

	return mat[m-1][n-1]
}


console.log(levenshtein('abc', 'yabd'))