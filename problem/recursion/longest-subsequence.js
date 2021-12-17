const { log } = console
const _m = {}
let _k = 0

function findLCS(s1, s2) {
	_k++
	const n1 = s1.length
	const n2 = s2.length
	
	if (!n1 || !n2) return ''
	
	const key = [s1, s2].sort().join(':')
	if (_m[key]) return _m[key]
	
	const s1_ = s1.slice(1, n1)
	const s2_ = s2.slice(1, n2)
	
	let lcs = 0
	if (s1.charAt(0) == s2.charAt(0)) {
		lcs = s1.charAt(0) + findLCS(s1_, s2_)
	} else {
		const f1 = findLCS(s1_, s2)
		const f2 = findLCS(s1, s2_)
		lcs = (f1.length >= f2.length) ? f1 : f2
	}
	
	_m[key] = lcs
	return lcs
}

//log(findLCS('attc', 'acttcg'))
log(findLCS(
	'aaaccgtgagttattcgttctagaa', 
	'cacccctaaggtacctttggttc'
))

log(_k, 25*23)