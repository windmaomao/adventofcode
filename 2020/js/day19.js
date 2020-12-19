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
	
	return { rules, strs }
}

const part1 = config => {
	const { rules, strs } = config
	console.log(rules)
	
	const isRuleValid = (str, i, ruleId) => {
		const r = rules[ruleId]
		let res, len = 0
		if (typeof r == 'string') {
			len = 1
			res = str[i] == r
		} else {
			res = r.map(ruleOr => {
//				console.log('ruleOr', i, ruleOr)
				let c = 0
				const ruleOrRes = ruleOr.map(ruleAnd => {
//					console.log('ruleAnd', i+c, ruleAnd)
					const { res: res2, len: len2 } = isRuleValid(str, i+c, ruleAnd)
					c += len2
					return res2
				}).every(v => v)
				len = c
				return ruleOrRes
			}).some(v => v)			
		}
//		console.log(`i:${i}`, `r:${ruleId}`, res, len)
		return { res, len }
	}
	
//	console.log(strs[1])
//	return isRuleValid(strs[4], 0, 0)
	return strs.map(str => {
		const c = isRuleValid(str, 0, 0)
		return c.res ? (c.len == str.length) : false
	}).filter(v => v).length
}

const read = require('./read.js')
const run = require('./run.js')

const lines = read('19b')
const config = getConfig()
run(part1, config)
