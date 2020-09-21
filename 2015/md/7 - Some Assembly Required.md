## Kotlin `7` - Some Assembly Required

```fortran
lf AND lq -> ls
iu RSHIFT 1 -> jn
bo OR bu -> bv
gj RSHIFT 1 -> hc
et RSHIFT 2 -> eu
```

### Model

```kotlin
data class Equation(
  val op: String,
  val inputs: List<String>,
  val output: String
) {
  fun eval(values: HashMap<String, Int>): Int {
    val _v = { i: Int ->
      values.getOrDefault(inputs[i], 0)
    }
    return when (op) {
      "AND" -> _v(0) and _v(1)
      "OR" -> _v(0) or _v(1)
      "LSHIFT" -> _v(0) shl _v(1)
      "RSHIFT" -> _v(0) shr _v(1)
      "NOT" -> {
        var t = _v(0).inv()
        if (t < 0) { t += 65536 }
        t
      }
      else -> _v(0)
    }
  }
}
```

A instruction is modelled as `Equation`, which can act upon `op` ('And', 'Or', 'LSHIFT', 'RSHIFT' and 'NOT') as well as `inputs` and `output` variables.

```kotlin
fun getEquation(s: String): Equation {
  val parts = s.split(" -> ")
  val op = "[A-Z]+".toRegex().find(parts[0])?.value ?: ""
  val inputs = "[a-z]+|\\d+".toRegex()
    .findAll(parts[0]).map{ it.value }.toList()
  return Equation(op, inputs ,parts[1])
}
```

Once we get all equations via `getEquation`, we can calculate the topology sorting of the map.

```kotlin
fun getTopologyList(
  eqns: List<Equation>, 
  root: String
): List<String> {
  val t: Map = Map()
  eqns.forEach { eqn ->
    eqn.inputs.forEach { dep ->
      t.addEdge(eq.output, dep)
    }
  }
  return t.getTSortNodes(root)
}
```

> Topological sorting is a graph algorithm, please check `Topic: Map` for general map data structure and algorithm.  

### Part 1

```kotlin
  fun evalEquations(
    equations: HashMap<String, Equation>,
    variables: List<String>,
  ): HashMap<String, Int> {
    val values: HashMap<String, Int> = HashMap()
    variables.forEach { output ->
      values[output] = equations[output]?.eval(values) ?: output.toInt()
    }
    return values
  }

fun part1(
  equations: HashMap<String, Equation>,
  root: String = "a"
): Int {
  val variables = getTopologyList(equations.values, root)
  val values = evalEquations(equations, variables)
  return values[root] ?: 0
}
```

Given a hash map of `Equation` by name, we first calculate the list of variables in the least dependency order, and then variables one by one from each equation.

### Part 2

```kotlin
val a = 16076
val newList: List<String> = list.map {
  when (it) {
    "19138 -> b" -> "$a -> b"
    else -> it
  }
}
```

You can copy the value for `a` to replace variable `b` in the raw file or do the above processing of raw file. And then rerun the `Part 1`.

