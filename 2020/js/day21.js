const getFoods = () => {
  const allergens = {}, ingredients = {}
  const foods = lines.map(line => {
    const parts = line.slice(0, -1).split(' (contains ')
    const igrs = parts[0].split(' ')
    const algs = parts[1].split(', ')
    igrs.forEach(v => {
      if (!ingredients[v]) ingredients[v] = {
        count: 0, algs: []
      }
      ingredients[v].count++
    })
    algs.forEach(v => allergens[v] = true)
    return { igrs, algs }
  })
  for (igr in ingredients) {
    ingredients[igr].algs = {...allergens}
  }
  foods.forEach(food => {
    Object.keys(ingredients)
      .filter(i => food.igrs.indexOf(i) < 0)
      .forEach(i => {
        food.algs.forEach(a => { 
          ingredients[i].algs[a] = false 
        })
      })
  })
  return { foods, allergens, ingredients }
}

const part1 = foods => {
  const { ingredients } = foods
  return Object.values(ingredients)
    .filter(i => Object.values(i.algs).every(v => !v))
    .map(i => i.count)
    .reduce((acc, v) => acc + v, 0)
}

const read = require('./read.js')
const lines = read('21')
const run = require('./run')
run(part1, getFoods())