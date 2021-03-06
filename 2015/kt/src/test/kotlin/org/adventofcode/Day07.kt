package org.adventofcode

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

class Day07(name: String = "07"): Day(name) {
  private val equations: HashMap<String, Equation> = HashMap()

  fun getEquation(s: String): Equation {
    val parts = s.split(" -> ")
    val op = "[A-Z]+".toRegex().find(parts[0])?.value ?: ""
    val inputs = "[a-z]+|\\d+".toRegex()
      .findAll(parts[0]).map{ it.value }.toList()
    return Equation(op, inputs ,parts[1])
  }

  fun getTopologyList(list: List<String>, root: String): List<String> {
    val t: Map = Map()
    list.forEach { str ->
      val eq = getEquation(str)
      equations[eq.output] = eq
      eq.inputs.forEach { dep ->
        t.addEdge(eq.output, dep)
      }
    }
    return t.getTSortNodes(root)
  }

  fun calcEquations(topologyList: List<String>): HashMap<String, Int> {
    val values: HashMap<String, Int> = HashMap()
    topologyList.forEach { output ->
      values[output] = equations[output]?.eval(values) ?: output.toInt()
    }
    return values
  }

  fun part1(list: List<String>, root: String = "a"): Int {
    val values = calcEquations(getTopologyList(list, root))
    return values[root] ?: 0
  }

  fun part2(list: List<String>, a: Int): Int {
    val newList: List<String> = list.map {
      when (it) {
        "19138 -> b" -> "$a -> b"
        else -> it
      }
    }
    return part1(newList)
  }
}