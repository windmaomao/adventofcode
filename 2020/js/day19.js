const getConfig = () => {
	const rules = {}, curr = [], strs = []
	let i = 0
	while (lines[i] != '') {
		const p = lines[i].split(': ')
		let res = []
		if (p[1][0] == '"') {
			const pp = p[1].split('"')
			res = pp[1]
			curr.push(parseInt(p[0]))
		} else {
			res = p[1].split(' | ').map(s => {
				return s.split(' ').map(v => parseInt(v))
			})
		}
		rules[p[0]] = res
		i++
	}
	
	i++
	while (i < lines.length) {
		strs.push(lines[i])
		i++
	}
	
//	return rules
	return { rules, strs }
}

const part1 = config => {
	const { rules, strs } = config
	console.log(rules)
	const curr = rules['0']
	
	const isValid = (str, i, rule) => {
		console.log(str, i, rule)
		// and operation
		return rule.map((r, j) => {
			const nrule = rules[r]
			console.log('nrule', r, nrule)
			if (typeof nrule == 'string') {
				return nrule[0] == str[i+j]
			}
			// or operation
			return nrule.map(nr => {
				return isValid(str, i+j, nr)	
				return true
			}).some(v => v)
		}).every(v => v)
	}
	
	return isValid(strs[1], 0, rules[0][0])
}

const read = require('./read.js')
const run = require('./run.js')

const lines = read('19a')
const config = getConfig()
run(part1, config)
