// 5/16/24
function curry(callback) {
  return (...args) => {
    if (args.length) {
      return curry(callback.bind(null, ...args))
    } else {
      return callback.call(null, ...args)
    }
  }
}

/*  curry(fn) returns a curried function
 *  when invoked, binds the input fn
 *  with the input arguments
 */

const id = (a) => a
console.log(curry(id)(9)())

const plus = (a, b) => a + b
console.log(curry(plus)(1)(2)())
console.log(curry(plus)(1, 2)())

const sum = (...ns) => ns.reduce((acc, n) => acc + n, 0)
console.log(curry(sum)())
console.log(curry(sum)(1)())
console.log(curry(sum)(1)(2)())
console.log(curry(sum)(1, 2)(3)(4, 5, 6)())

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
