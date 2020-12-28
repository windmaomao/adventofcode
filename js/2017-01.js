require('./utils/index')
const digits = read('2017', '01')[0]
  .split('').map(Number)

const part = (arr, forward = 1) => {
	const carr = [...arr, ...arr]
	return Array.new(arr.length)
	.filter(i => carr[i] == carr[i + forward])
	.map(i => carr[i])
	.sum()	
}

run(part, digits)
run(part, digits, digits.length / 2)