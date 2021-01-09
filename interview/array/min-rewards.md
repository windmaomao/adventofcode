# Min Rewards

Imagine that you're a teacher who's just graded the final exam in a class. You have a list of student scores on the final exam in a particular order (not necessarily sorted), and you want to reward your students. You decide to do so fairly by giving them arbitrary rewards following two rules: 

- 1) All students must receive at least one reward.
- 2) Any given student must receive strictly more rewards than an adjacent student (a student immediately to the left or to the right) with a lower score and must receive strictly fewer rewards than an adjacent a student with a higher score. 

Write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to students to satisfy the two rules.

You can assume that all students have different scores; in other words, the scores are all unique.

```bash
  [8,4,2,1,3,6,7,9,5] -> 25
```  

## Hint

Find local minimium and then expand to both directions till hitting the boundary.

## Code

```javascript
const part = arr => {
	const mins = []
	const n = arr.length
	
	let i = 0
	while (i < n) {
		let isMin = true
		if (i < n - 1 && arr[i] > arr[i+1]) isMin = false
		if (i > 0 && arr[i] > arr[i-1]) isMin = false
		if (isMin) mins.push(i)
		i++
	}
	
	const res = new Array(n).fill(0)
	const fill = (rewards) => {
		if (rewards.length < 1) return
		
		const nrs = []
		rewards.forEach(([index, reward, dir, last]) => {
			if (arr[index] < last) return
			if (res[index]) {
				if (res[index] < reward) {
					res[index] = reward
					return
				}				
			}
			res[index] = reward
			const nindex = index + dir
			if (nindex < 0 || nindex > n - 1) return
			nrs.push([nindex, reward + 1, dir, arr[index]])
		})
		fill(nrs)
	}
	
	const start = []
	mins.forEach(i => {
		start.push([i, 1, -1, arr[i]])
		start.push([i, 1, 1, arr[i]])
	})
	fill(start)
	return res.reduce((acc, v) => acc + v, 0)
}

console.log(part(a))
```