class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.m = new Map()
    this.uses = []
  }
  
  useKey(key) {
    this.uses = this.uses.filter(v => v != key)
    this.uses.push(key)
  }
  retireKey() {
    return this.uses.shift()
  }

  insertKeyValuePair(key, value) {
    if (this.m.size == this.maxSize) {
      const k = this.retireKey()
      this.m.delete(k)
    }
    this.m.set(key, value)
    this.useKey(key)
  }

  getValueFromKey(key) {
    if (!this.m.has(key)) return null
    this.useKey(key)
    return this.m.get(key)
  }

  getMostRecentKey() {
    return this.uses.length 
      ? this.uses[this.uses.length - 1] : null
  }
}

const { log } = console
const lru = new LRUCache(3)
lru.insertKeyValuePair('b', 2)
lru.insertKeyValuePair('a', 1)
lru.insertKeyValuePair('c', 3)
log(lru.getMostRecentKey())
log(lru.getValueFromKey('a'))
lru.insertKeyValuePair('d', 4)
log(lru.getValueFromKey('b'))
lru.insertKeyValuePair('a', 5)
log(lru.getValueFromKey('a'))

//log([lru.m, lru.recent])
