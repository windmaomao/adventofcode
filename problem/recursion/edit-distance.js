const { log } = console
let _k = 0
const _m = {}

function editDist(s1, s2) {
	_k++
	const n1 = s1.length
	const n2 = s2.length
	
	if (!n1) return n2
	if (!n2) return n1
	
	const key = [s1, s2].sort().join(':')
	if (_m[key]) return _m[key]
	
	const s1_ = s1.slice(1, n1)
	const s2_ = s2.slice(1, n2)
	let dist = 0
	
	if (s1.charAt(0) == s2.charAt(0)) {
		dist = editDist(s1_, s2_)
	} else {
		const d = editDist(s1_, s2)
		const i = editDist(s1 , s2_)
		const r = editDist(s1_, s2_)
		
		dist = Math.min(d, i, r) + 1
	}
	
	_m[key] = dist
	return dist
}

//log(editDist('cat', 'car'))
log(editDist('sunday', 'saturday'))
log('iterations:', _k)