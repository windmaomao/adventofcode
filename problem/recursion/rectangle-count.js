const rectangleMania = (coords) => {
	const adjs = (i) => {
		const [fx, fy] = coords[i]
		
		const res = []
		coords.forEach(([px, py], j) => {
			if (i != j) {
				if (px == fx || py == fy) {
					res.push(j)
				}
			}
		})
		
		return res
	}
	
	let all = []
	let rectangles = []
	const visit = (i) => {
		// step
		rectangles.push(coords[i])
    const k = rectangles.length
		
		// pick
		const [ix, iy] = coords[i]
		if (k == 4) {
			const [ox, oy] = rectangles[0]
			if (oy == iy) {
				all.push([...rectangles])
			}
		} else {
			adjs(i).forEach(j => {
//			if (j < i) return
				const [jx, jy] = coords[j]
				if (k == 1 && jy <= iy) return
				if (k == 2 && jx <= ix) return
				if (k == 3 && jy >= iy) return
				visit(j)
			})
		}
	
		// back
		rectangles.pop()
	}

	coords.forEach((_, o) => { visit(o) })
	return all
}

//console.log(rectangleMania([
//[0,0], [0,1], [1,1], [1,0],
//[2,1], [2,0], [3,1], [3,0]
//]))

console.log(rectangleMania([
	[0,0], [0,1], [1,1], [1,0],
	[2,1], [2,0], [3,1], [3,0],
	[1,3], [3,3]
]))