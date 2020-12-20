const util = require('util')

const settings = {
//	showHidden: false, 
	depth: null,
	colors: true,
	maxArrayLength: Infinity,
//	maxStringLength: Infinity,
//	breakLength: 1,
//	compact: false
}

util.inspect.defaultOptions = {
	...util.inspect.defaultOptions,
	...settings
}

const log = (s, options = {}) => { 
	console.log(util.inspect(s, options))
}

module.exports = log