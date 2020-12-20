const getTiles = () => lines.map(l => {
	const [t, ...res] = l.split('\n')
	const id = parseInt([...t.match(/\d+/)][0])
	return { id, res }
})

const read = require('./read.js')
const run = require('./run.js')
const log = require('./log.js')

const lines = read('20a', '\n\n')
run(getTiles)