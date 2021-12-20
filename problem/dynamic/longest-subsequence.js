const { log, table } = console

function commonSubsequence(str1, str2) {
	const m = str1.length + 1
	const n = str2.length + 1
	const mat = new Array(m).fill(0).map(() => 
		new Array(n).fill('')
	)
	
	for (let i = 1; i < m; i++) {
		const ic = str1[i-1]
		for (let j = 1; j < n; j++) {
			const jc = str2[j-1]
			
			if (ic == jc) {
				mat[i][j] = mat[i-1][j-1] + ic
			} else {
				const is = mat[i-1][j]
				const js = mat[i][j-1]
				mat[i][j] = is.length >= js.length 
					? mat[i-1][j] : mat[i][j-1]
			}
		}
	}
	
	return mat
}

table(commonSubsequence('attc', 'acttcg'))
