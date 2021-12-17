class EventTarget {
  constructor() {
    this.m = {}
  }
  
  hasEvent(name, callback) {
    if (!this.m[name]) return false
    return this.m[name].indexOf(callback) >= 0
  }

  addEventListener(name, callback) {
    if (!this.hasEvent(name, callback)) {
      this.m[name] = this.m[name] || []
      this.m[name].push(callback)
    }
  }

  removeEventListener(name, callback) {
    if (this.hasEvent(name, callback)) {
      this.m[name] = this.m[name].filter(v => v !== callback)
    }
  }

  dispatchEvent(name) {
    if (!this.m[name]) return
    this.m[name].forEach(cb => cb())
  }
}

const e = new EventTarget()

const fn = () => {
  console.log('ddd')
}
e.addEventListener('e', fn)
//e.dispatchEvent('e')
e.removeEventListener('e', fn)
e.dispatchEvent('e')