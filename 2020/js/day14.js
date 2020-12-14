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
	let masks = null
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

const part2 = () => {
	let xs = [], ones = []
	const mem = {}
	
	lines.forEach(line => {
		if (line[1] == 'a') {
			const mask = line.match(/[X|0|1]+/)[0].split('').reverse()
			xs = mask.map((c, i) => (c == 'X' ? i : -1)).filter(c => (c >= 0))
			ones = mask.map((c, i) => (c == '1' ? i : -1)).filter(c => (c >= 0))
//			console.log(xs, ones)
		} else {
			const [addr, num] = getEqn(line)
			const n = placeholder()
			addr.toString(2).split('').reverse()
				.forEach((c, i) => { n[i] = c })
			ones.forEach(i => { n[i] = '1' })
			xs.forEach(i => { n[i] = '0' })
//			console.log('Mask', n)

			let i = 0
			while (i < Math.pow(2, xs.length)) {
				const p = i.toString(2).split('').reverse()
				const n2 = n.slice()
				xs.forEach((i, j) => { if (p[j] != undefined) n2[i] = p[j] })
				const addr2 = parseInt(n2.reverse().join(''), 2)
				mem[addr2] = num
				i++
			}
		}
	})

	return Object.values(mem).reduce((acc, v) => acc + v, 0)
}

console.log(part1())
console.log(part2())