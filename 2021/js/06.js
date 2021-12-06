const bundle = require('./bundle')
const nums = bundle.read('06', '\n', false)[0].toNumbers()

const part1 = (ns, ds) => {
	let arr = ns.slice()

	let j = 0
	while (j < ds) {
		const arr2 = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == 0) {
				arr[i] = 7
				arr2.push(9)
			}
		}
		
		arr = arr.concat(arr2)
		for (let i = 0; i < arr.length; i++) {
			arr[i]--
		}
		j++
	}
	
	return arr.length
}

const part2 = (ns, ds) => {
	const count = [].new(9)
	ns.forEach(i => { count[i]++ })
	
	const days = [].range(ds)
	days.forEach(v => {
		count[7] += count[0]
		const f = count.shift()
		count.push(f)
	})
	
	return count.sum()
}

bundle.run(part1, nums, 80)
bundle.run(part2, nums, 256)