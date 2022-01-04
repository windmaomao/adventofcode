function curry(callback) {
	function visit(args, a) {
		if (a.length == 0) {
			return callback.apply(null, args)
		} else {
			return function() {
				return visit([...args, ...a], arguments)
			}
		}
	}
	
	return function () {
		return visit([], arguments)
	}
}

const id = a => a
console.log(curry(id)(9)())

const plus = (a, b) => a + b
console.log(curry(plus)(1)(2)())
console.log(curry(plus)(1,2)())

const sum = (...ns) => 
ns.reduce((acc, n) => acc+n, 0);
console.log(curry(sum)())
console.log(curry(sum)(1)())
console.log(curry(sum)(1)(2)())
console.log(curry(sum)(1,2)(3)(4,5,6)())

const curried = curry(sum)
const addTwo = curried(2)
const addFour = curried(4)
console.log(addTwo(3)())
console.log(addFour(3)())


function curry2(callback) {
	let args = []
	
	function visit(a) {
		if (a === undefined) {
			return callback.apply(null, args)
		} else {
			args.push(...arguments)
			return visit
		}
	}
	
	return visit
}