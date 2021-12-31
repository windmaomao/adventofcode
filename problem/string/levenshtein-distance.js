function levenshteinDistance(str1, str2) {
	const minEdits = (s1, s2) => {
		const l1 = s1.length, l2 = s2.length
		
		if (l1 == 0) return l2
		if (l2 == 0) return l1
		
		const c1 = s1[0], c2 = s2[0]
		const s1_ = s1.slice(1), s2_= s2.slice(1)
		if (c1 == c2) {
			return minEdits(s1_, s2_)
		} else {
			return Math.min(
				minEdits(s1_, s2),
				minEdits(s1, s2_),
				minEdits(s1_, s2_)
			) + 1
		}
	}
	
	return minEdits(str1, str2)
}

console.log(levenshteinDistance('abc', 'yabd'))