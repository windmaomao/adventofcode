function Knapsack(weights, values) {

  this.maxValue = (i, target) => {
    if (i <= -1 || target <= 0) return 0

    const currValue = this.maxValue(i - 1, target)
    if (weights[i] > target) return currValue

    const w = weights[i]
    const v = values[i]
    return Math.max(
      this.maxValue(i - 1, target - w) + v,
      currValue
    )
  }

}

const weights = [1,2,4,2,5]
const values = [5,3,5,3,2]
const target = 10
const kp =new Knapsack(weights, values)
console.log(kp.maxValue(values.length - 1, target))
