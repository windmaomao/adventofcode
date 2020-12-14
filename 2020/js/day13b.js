// https://github.com/damyvv/AoC_2020/blob/master/day13.rb
const read = require('./read.js')
const number = require('./number.js')
const lines = read('13')

timestamp = parseInt(lines[0])
busses = lines[1].split(',')

busses = busses.map((b, idx) => ({
	id: b == 'x' ? 0 : parseInt(b),
	idx: idx
})).filter(b => b.id != 0)

calc_timestamp = (busses.shift()).id		// 19
lcm = calc_timestamp

while (next_b = busses.shift()) {
	next_timestamp = calc_timestamp
	while ((next_timestamp + next_b.idx) % next_b.id != 0) {
		next_timestamp += lcm
	}
	calc_timestamp = next_timestamp
	lcm = number.lcm(lcm, next_b.id)
}

console.log(timestamp, busses, calc_timestamp)
console.log(calc_timestamp)