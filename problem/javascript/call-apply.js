Function.prototype.myCall = function(thisContext, ...args) {
	const k = Symbol()
	thisContext[k] = this
	const res = thisContext[k](...args)
	delete thisContext[k]
	return res
}

Function.prototype.myApply = function(thisContext, args) {
	return this.myCall(thisContext, ...args)
}

Function.prototype.myBind = function(thisContext, ...args) {
	const that = this
	return function(...others) {
		return that.myCall(thisContext, ...args, ...others)
	}
}

function fn(p, p2) {
	console.log(this.name, p, p2)
	return 'yes'
}

const abc = {
	fn,
	name: 'Fang'
}

abc.fn('Jin', 'Yeah')
fn.myCall(abc, 'Jin', 'Yeah')
fn.myApply(abc, ['Jin', 'Yeah'])
fn.myBind(abc, 'Jin')('Yeah')