function describe(testSuiteName, func) {
  console.log(`beginning test suite ${testSuiteName}`)
  try {
    func()
  } catch (e) {
    console.error(`failed running test suite ${testSuiteName} ${e}`)
    return
  }
  console.log(`successfully completed test suite ${testSuiteName}`)
}

function it(testCaseName, func) {
  console.log(`beginning test case ${testCaseName}`)
  try {
    func()
  } catch (e) {
    const msg = `on test case ${testCaseName} with error message ${e}`
    throw msg
  }
  console.log(`successfully completed test case ${testCaseName}`)
}

function expect(actual) {
  const _p = s => JSON.stringify(s)
  
  const toExist = () => {
    if (actual === null || actual === undefined) {
      const msg = `expected value to exist but got ${_p(actual)}`
      throw msg
    }
  }
    
  const toBe = expected => {
    if (expected !== actual) {
      const msg = `expected ${_p(actual)} to be ${_p(expected)}`
      throw msg
    }
  }
  
  const toBeType = expected => {
    if (typeof actual !== expected) {
      const msg = `expected ${_p(actual)} to be of type ${expected} but got ${typeof actual}`
      throw msg
    }
  }
  
  return { toExist, toBe, toBeType }
}


//describe('A', () => {
//it('1', () => {
//  expect('foo').toExist()
//  expect(1 + 1).toBe(2)
//})
//it('2', () => {
//  expect({}).toBeType('object')
//})
//})

//describe('A', () => {
//it('1', () => {
//  expect(0).toBe(0)
//})
//it('2', () => {
//  expect(true).toBe(true)
//  expect(true).toBe(false)
//})
//it('3', () => {
//  expect('foo').toBe('bar')
//})
//})

describe('A', () => {
  it('1', () => {
//  expect(1).toBe(2)
//  expect('foo').toBe('bar')
//  expect(false).toBe(true)
    expect('1').toBe(1)
  })
})