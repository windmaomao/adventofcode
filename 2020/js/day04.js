const read = require('./read.js')
const fn = read('04')

function passports() {
	let c = 0
	let i = 0
	let passport = []
	let res = []
	while (i < fn.length) {
		const str = fn[i]
		if (str == '') {
			res.push(passport)
			passport = []
		} else {
			passport = passport.concat(str.split(' '))
		}
		i++
	}
	
	return res
}

function part1(pps) {
	return pps.map(p => {
		if (p.length < 7) return false
		if (p.length == 8) return true
		const hasCid = p.map(v => v.substring(0, 3)).some(d => d == 'cid')
		return !hasCid
	}).filter(v => !!v).length
}

const keys = [
	'byr', 'iyr', 'eyr', 'hgt',
	'hcl', 'ecl', 'pid', 'cid'
]
const valid = p => {
	if (p.length < 7) return false
	const m = {}
	p.forEach(v => {
		const [key, value] = v.split(':')
		m[key] = value
	})
	let tmp
	const inValid = keys.map(key => {
		const value = m[key]
		switch(key) {
			case 'byr':
				if (!value) return false
				if (value.length != 4) return false
				tmp = parseInt(value)
				if (tmp < 1920 || tmp > 2002) return false
				break
			case 'iyr':
				if (!value) return false
				if (value.length != 4) return false
				tmp = parseInt(value)
				if (tmp < 2010 || tmp > 2020) return false
				break
			case 'eyr':
				if (!value) return false
				if (value.length != 4) return false
				tmp = parseInt(value)
				if (tmp < 2020 || tmp > 2030) return false
				break
			case 'hgt':
				if (!value) return false
				tmp = value.slice(-2)
				if (['in', 'cm'].indexOf(tmp) < 0) return false
				if (tmp == 'in') {
					tmp = parseInt(value.slice(0, -2))
					if (tmp < 59 || tmp > 76) return false
				} else {
					tmp = parseInt(value.slice(0, -2))
					if (tmp < 150 || tmp > 193) return false
				}
				break
			case 'hcl':
				if (!value) return false
				if (value.length != 7) return false
				if (value[0] != '#') return false
				break
			case 'ecl':
				return ['amb', 'blu', 'brn', 
					'gry', 'grn', 'hzl', 'oth'
				].indexOf(value) >= 0
				break
			case 'pid':
				if (!value) return false
				if (value.length != 9) return false
				break
			case 'cid':
				break
		}
		return true
	}).some(v => !v)
	return !inValid
}

function part2(pps) {
	return pps.map(valid).filter(v => !!v).length
}

console.log(part1(passports()))
console.log(part2(passports()))