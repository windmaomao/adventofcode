# Visualization

## Array

```javascript
const stack = [10, 20]
const gridSize = 40
const pointSize = 0.5
const sleepTime = 1000
const durationTime = 500

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function draw(data) {
  await sleep(1000)
  return d3.selectAll("span")
  .data(data)
  .join(
    enter => enter
      .append("span")
      .style("opacity", 0.5)
      .style("color", "white")
      .style("background-color", "red")
      .style("padding", "0.5rem")
      .style("margin", "0.1rem")
      .text(d => d)
    ,
    update => update
      .style("background-color", "gray")
    ,
    exit => exit
      .transition()
      .duration(durationTime)
      .style("opacity", 0)
      .on('end', function() { d3.select(this).remove() })
  )
  .transition()
  .duration(durationTime)
  .style("opacity", 1)
}

async function start() {
  await draw(stack)
  stack.pop()
  await draw(stack)
  stack.push(50)
  await draw(stack)
  stack.push(-1)
  await draw(stack)
}

async function run() {
  const n = 5
  for (let i = 0; i < n; i++) {
    stack.push(i)
    await draw(stack)
  }
}

run()

```