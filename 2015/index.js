import { input } from './utils'
import days from './days'

const inputs = [
  '', 
  '\n'
]

function run(i) { 
  const day = i - 1
  const data = input('day'+i, inputs[day])
  const main = days[day]
  return main(data)
}

const today = 2
run(today)