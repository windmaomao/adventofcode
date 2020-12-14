const read = require('./read.js')
const lines = read('14')
const placeholder = () => new Array(36).fill('0')

const getEqn = l => {
	const parts = l.split(' = ')
	return [
		parseInt(parts[0].match(/\d+/)[0]),
		parseInt(parts[1])
	]
}

const part1 = () => {
	let mask = null
	const mem = {}
	
	lines.forEach(line => {
		if (line[1] == 'a') {
			masks = line.match(/[X|0|1]+/)[0].split('').reverse()
			  .map((c, i) => (c != 'X' ? [i, c] : null))
				.filter(c => !!c)
//			console.log('masks', masks)
		} else {
			const [addr, num] = getEqn(line)
			const n = placeholder()
			num.toString(2).split('').reverse()
			  .forEach((c, i) => { n[i] = c })
			masks.forEach(m => { n[m[0]] = m[1] })
			mem[addr] = parseInt(n.reverse().join(''), 2)
//			console.log(addr, mem[addr])
		}
	})
	
	return Object.values(mem).reduce((acc, v) => acc + v, 0)
}

console.log(part1())