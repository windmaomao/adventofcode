const part1 = publicKeys => {
	const loopSizes = publicKeys.map(key => {
		let i = 0, k = 1
		while (k != key) {
			k = (k * 7) % 20201227
			i++
		}
		return i
	})
	
	let i = 0, k = 1
	while (i < loopSizes[1]) {
		k = (k * publicKeys[0]) % 20201227
		i++
	}
	
	return k
}

const read = require('./read.js')
const nums = read('25', '\n', true)
const run = require('./run')
run(part1, nums)

// card 5764801, 8
// door 17807724, 11

//19774466, 11629023
//7290641, 3816829