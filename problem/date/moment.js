var moment = require('moment-timezone')

const d = new Date()
const m = moment(d)

moment.tz.setDefault('America/Los_Angeles')

console.log(m.format('Z'))
console.log(moment(d).tz("America/Los_Angeles").format('Z'))

console.log(moment.tz.guess())
