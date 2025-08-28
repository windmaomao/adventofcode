// 5/15/24
function promisify(callback) {
  return function (...args) {
    const that = this
    return new Promise((res, rej) => {
      const handle = (error, value) => {
        if (error) {
          rej(error)
        } else {
          res(value)
        }
      }

      callback.call(that, ...args, handle)
    })
  }
}

function adder(x, y, handle) {
  const v = x + y
  if (typeof v !== "number") {
    const error = "Not a number"
    handle(error, null)
  } else {
    handle(null, v)
  }
}

const p = promisify(adder)
p(1, 2).then(console.log).catch(console.error)
p("1", 2).then(console.log).catch(console.error)

// 6/29/25
function promisify(fn) {
  let thenCbs = [],
    catchCbs = [],
    invoked = false

  return function () {
    const invoke = () => {
      if (invoked) return
      invoked = true
      try {
        fn(...arguments, (error, result) => {
          if (!error) {
            thenCbs.forEach((cb) => cb(result))
          } else {
            catchCbs.forEach((cb) => cb(error))
          }
        })
      } catch (e) {}
    }

    const res = {
      then: (cb) => {
        setTimeout(invoke, 0)
        thenCbs.push(cb)
        return res
      },
      catch: (cb) => {
        setTimeout(invoke, 0)
        catchCbs.push(cb)
        return res
      },
    }

    return res
  }
}

function promisify(fn) {
  return function () {
    return new Promise((resolve, reject) => {
      try {
        fn(...arguments, (err, res) => {
          if (!err) {
            resolve(res)
          } else {
            reject(err)
          }
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}
