const getFoods = () => {
  const allergens = {}, ingredients = {}
  const foods = lines.map(line => {
    const parts = line.slice(0, -1).split(' (contains ')
    const igrs = parts[0].split(' ')
    const algs = parts[1].split(', ')
    igrs.forEach(v => {
      if (!ingredients[v]) ingredients[v] = {
        count: 0, id: v, algs: new Set()
      }
      ingredients[v].count++
    })
    algs.forEach(v => allergens[v] = true)
    return { igrs, algs }
  })
  const algs = Object.keys(allergens)
  for (igr in ingredients) {
    ingredients[igr].algs = new Set(algs)
  }
  // eliminate possibilities here
  foods.forEach(food => {
    Object.keys(ingredients)
      .filter(i => food.igrs.indexOf(i) < 0)
      .forEach(i => {
        food.algs.forEach(a => { 
          ingredients[i].algs.delete(a) 
        })
      })
  })
  return { foods, allergens, ingredients }
}

const part1 = foods => {
  const { ingredients } = foods
  return Object.values(ingredients)
    .filter(i => i.algs.size == 0)
    .map(i => i.count)
    .reduce((acc, v) => acc + v, 0)
}

const part2 = foods => {
  const { ingredients, allergens } = foods
  const sortedAlgs = Object.keys(allergens).sort()
  let igrs = Object.values(ingredients)
  const n = sortedAlgs.length
  const res = new Array(n).fill('')

  while (true) {
    const canSolves = igrs.filter(i => i.algs.size == 1)
    if (canSolves.length < 1) break
    canSolves.forEach(i => {
      const alg = [...i.algs.keys()][0]
      const algIndex= sortedAlgs.indexOf(alg)
      res[algIndex] = i.id
      igrs.forEach(j => { j.algs.delete(alg) })
    })
  }
  return res.join(',')
}

const read = require('./read.js')
const lines = read('21')
const run = require('./run')
const foods = getFoods()
run(part1, foods)
run(part2, foods)