function diskStacking(disks) {
	const n = disks.length
	
	const availableDisks = (taken) => {
		const choices = new Array(n).fill(0).map((_, i) => i)
		if (taken.length < 1) return choices
		
		let prev = disks[taken[taken.length - 1]]
		return choices.filter(i => {
			if (taken.indexOf(i) >= 0) return false
			const b = disks[i]
			return [0,1,2].every(j => b[j] < prev[j])
		})
	}
	
	const disksHeight = (taken) => {
		return taken.reduce((acc, i) => acc + disks[i][2], 0)
	}
		
	// given the taken disks,
	// return disks with the max height
	const visit = (taken) => {
		let res = [], largest = 0
		if (taken.length != n) {
			const choices = availableDisks(taken)
			choices.forEach(i => {
				const nextTaken = [...taken, i]
				const nextDisks = [i, ...visit(nextTaken)]
				const nextHeight = disksHeight(nextDisks)
				if (nextHeight > largest) {
					largest = nextHeight
					res = nextDisks
				}
			})
		}

		return res
	}
	
	return visit([])
}

console.log(diskStacking([
	[2,1,2], [3,2,3], [2,2,8], [2,3,4], [1,3,1], [4,4,5]
]))