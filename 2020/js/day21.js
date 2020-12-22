const getFoods = () => {
  const allergens = {}, ingredients = {}
  const foods = lines.map(line => {
    const parts = line.slice(0, -1).split(' (contains ')
    const igrs = parts[0].split(' ')
    const algs = parts[1].split(', ')
    igrs.forEach(v => {
      if (!ingredients[v]) ingredients[v] = {
        count: 0, algs: [], id: v,
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

const part2 = foods => {
  const { ingredients, allergens } = foods
  const sortedAlgs = Object.keys(allergens).sort()
  let igrs = Object.values(ingredients)
    .filter(i => Object.values(i.algs).some(v => v))
  const n = sortedAlgs.length
  const res = new Array(n).fill('')

  while (igrs.length) {
    const canSolves = igrs.filter(i => {
      const m = Object.values(i.algs)
        .reduce((acc, v) => acc + (v ? 1 : 0), 0)
      return m == 1
    })
    canSolves.forEach(i => {
      const alg = Object.keys(i.algs).filter(v => i.algs[v])[0]
      const algIndex= sortedAlgs.indexOf(alg)
      res[algIndex] = i.id
      igrs.forEach(ii => {
        ii.algs[alg] = false
      })
    })
    igrs = igrs.filter(i => canSolves.indexOf(i) < 0)
  }
  return res
}

const read = require('./read.js')
const lines = read('21')
const run = require('./run')
const foods = getFoods()
run(part1, foods)
run(part2, foods)