// 5/15/24
const beginTestSuite = (name) => `beginning test suite ${name}`;
const successTestSuite = (name) => `successfully completed test suite ${name}`;
const beginTestCase = (name) => `beginning test case ${name}`;
const successTestCase = (name) => `successfully completed test case ${name}`;
const failTestCase = (suite, test, msg) =>
  `failed running test suite ${suite} on test case ${test} with error message ${msg}`;
const errorExist = (actual) => `expected value to exist but got ${actual}`;
const errorToBe = (actual, expected) => `expected ${actual} to be ${expected}`;
const errorToBeType = (actual, type, typeOfActual) =>
  `expected ${actual} to be of type ${type} but got ${typeOfActual}`;

function describe(testSuiteName, func) {
  console.log(beginTestSuite(testSuiteName));
  try {
    func();
    console.log(successTestSuite(testSuiteName));
  } catch (e) {
    const [test, msg] = e;
    console.error(failTestCase(testSuiteName, test, msg));
  }
}

function it(testCaseName, func) {
  console.log(beginTestCase(testCaseName));
  try {
    func();
    console.log(successTestCase(testCaseName));
  } catch (e) {
    const msg = e;
    throw [testCaseName, msg];
  }
}

const _p = (s) => JSON.stringify(s);
function expect(actual) {
  const toExist = () => {
    if (actual === null || actual === undefined) {
      throw errorExist(_p(actual));
    }
  };
  const toBe = (expected) => {
    if (actual !== expected) {
      throw errorToBe(_p(actual), _p(expected));
    }
  };
  const toBeType = (type) => {
    const typeOfActual = typeof actual;
    if (typeOfActual != type) {
      throw errorToBeType(_p(actual), type, typeOfActual);
    }
  };

  return {
    toExist,
    toBe,
    toBeType,
  };
}

// Do not edit the lines below.
exports.describe = describe;
exports.it = it;
exports.expect = expect;
