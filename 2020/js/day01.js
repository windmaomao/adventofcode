const part1 = (nums, target) => {
	const iter = array(nums.length, (_, i) => i)
	let res = -1
	iter.forEach(i => {
		iter.forEach(j => {
			if (j <= i) return
			let [a, b] = [nums[i], nums[j]]
			if (a + b == target) {
				res = a * b
			}
		})
	})
	return res
}

const part2 = (nums, target) => {
	const iter = array(nums.length, (_, i) => i)
	let res = -1
	iter.forEach(i => {
		iter.forEach(j => {
			if (j <= i) return
			iter.forEach(k => {
				if (k <= j) return
				let [a, b, c] = [nums[i], nums[j], nums[k]]
				if (a + b + c == target) {
					res = a * b * c
				}
			})
		})
	})
	return res
}

const read = require('./read.js')
const array = require('./array.js')
const nums = read('01', '\n', true)
const run = require('./run')
run(part1, nums, 2020)
run(part2, nums, 2020)
