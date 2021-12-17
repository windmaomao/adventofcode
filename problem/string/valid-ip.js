const sum = arr => arr.reduce((acc, v) => 
	acc + v.length, 0
)
const valid = (str) => {
	const n = parseInt(str)
	if (`${n}`.length != str.length) return false
	return (n>=0 && n <=255)
}

function validIPAddresses(str) {
	const n = str.length
	const parts = []
	const res = []
	const digits = [1,2,3]
	
	const visit = (len) => {
		if ((parts.length == 4)
			&& (sum(parts) == n)
		) {
			res.push([...parts].join('.'))
		} else {
			digits.forEach(v => {
				const next = len + v
				if (next <= n) {
					const part = str.slice(len, len+v)
					if (valid(part)) {
						parts.push(part)
						visit(len+v)
						parts.pop()
					}
				}
			})
		}
	}
	
	visit(0)
	return res
}

console.log(validIPAddresses('1921680'))