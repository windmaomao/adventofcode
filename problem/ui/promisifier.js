function promisify(caller) {
  return function () {
    const that = this
    return new Promise((resolve, reject) => {
      caller.call(that, ...arguments, (err, v) => {
        if (err) {
          reject(err)
        } else {
          resolve(v)
        }
      })
    })
  }
}

function adder(x, y, cb) {
  const v = x + y
  if (typeof v !== 'number') {
    cb('err', null)
  } else {
    cb(null, v)
  }
}

const p = promisify(adder)
p(1,2).then(console.log).catch(console.error)
p('1',2).then(console.log).catch(console.error)

