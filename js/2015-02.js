require('./utils/index')
const boxes = read('2015', '02')
  .map(line => line.split('x').map(Number))

const part1 = () => boxes.map(([l, w, h]) => {
	const base = 2 * l * w + 2 * w * h + 2 * h * l
	const areas = [l*w, w*h, h*l]
	return base + areas.min()	
}).sum()

const part2 = () => boxes.map(([l, w, h]) => {
	const base = l*w*h
	const edges = [l+w, w+h, h+l]
	return base + edges.min()*2
}).sum()

 run(part1)
 run(part2)
