const genTags = (n) => {
	const res = []
	
	const visit = (curr, i) => {
		if (i == n) {
			if (res.indexOf(curr) < 0) {
				res.push(curr)
			}
			return
		}
		
		for (let j = 0; j <= curr.length; j++) {
			let s = ''
			for (let k = 0; k < j; k++) {
				s += curr[k]
			}
			s += '()'
			for (let k = j; k < curr.length; k++) {
				s += curr[k]
			}
			
			visit(s, i + 1)
		}
	}
	
	visit('()', 1)
	
	return res
}

const pairs = genTags(4)
const divs = pairs.map(s => s
	.replace(/\(/g, '<div>')
	.replace(/\)/g, '</div>')
)

console.log(divs)


//"<div><div></div></div><div><div></div></div>", 
//(())(())

