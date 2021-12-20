class SuffixTrie {
	constructor(str) {
		this.root = {}
		this.endSymbol = '*'
		this.populateSuffixTrieFrom(str)
	}
	
	setStr(node, str, d) {
		if (!node) node = {}
		if (d == str.length) {
			node[this.endSymbol] = true
		} else {
			const c = str[d]
			node[c] = this.setStr(node[c], str, d + 1)
		}
		
		return node
	}
	
	populateSuffixTrieFrom(str) {
		if (!str) return
		for (let i = 1; i <= str.length; i++)
			this.setStr(this.root, str.slice(-i), 0)
	}
	
	getStr(node, str, d) {
		if (!node) return null
		if (d == str.length) return node
		const c = str[d]
		return this.getStr(node[c], str, d+1)
	}
	
	contains(str) {
		const n = this.getStr(this.root, str, 0)
		return n ? (n[this.endSymbol] || false) : false
	}
	
	mentions(str) {
		const n = this.getStr(this.root, str, 0)
		return n ? true : false
	}
	
}

const t = new SuffixTrie('this is a big string')
console.log(t.mentions('kd'))