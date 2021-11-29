const interweaving = (str1, str2, str3) => {
	const n1 = str1.length
	const n2 = str2.length
	const n3 = str3.length
	if (n1+n2 != n3) return false
	
	let res = false
	
	const visit = (i, j) => {
		const k = i + j
		if (k >= n3) {
			res = true
			return
		}
		
		if (i < n1 && str1[i] == str3[k]) {
			visit(i + 1, j)
		}
		
		if (j < n2 && str2[j] == str3[k]) {
			visit(i, j + 1)
		}
	}
	
	visit(0, 0)
	
	return res
}

console.log(interweaving("-algo", "your", "your-algo"))