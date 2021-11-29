const keys = {
	'1': '1',
	'2': 'abc',
	'3': 'def',
	'4': 'ghi',
	'5': 'jkl',
	'6': 'mno',
	'7': 'pqrs',
	'8': 'tuv',
	'9': 'wxyz',
	'0': '0'
}

const phoneNumbers = (str) => {
	const n = str.length
	const res = []
	
	const visit = (curr) => {
		const cn = curr.length
		if (cn == n) {
			res.push(curr)
			return
		}
		
		const chars = keys[str[cn]]
		for (const c of chars) {
			visit(curr + c)
		}
	}

	visit('')

	console.log(res)
}

phoneNumbers('1905')