package org.adventofcode

class Graph {
  private val tree: HashMap<String, String> =
    HashMap<String, String>()

  fun depends(child: String, parent: String) {
    if (!tree.containsKey(parent)) {
      tree.put(parent, "")
    }
    tree.put(child, parent);
  }

  // Topological sort
  fun tsort(root: String): List<String> {
    val list: ArrayList<String> = arrayListOf()
    tree
      .filterValues { it == root }
      .forEach { (key, _) ->
        list.addAll(tsort(key))
      }
    list.add(root)
    return list
  }
}

data class Equation(
  val op: String,
  val inputs: List<String>,
  val output: String
) {
  fun eval(values: HashMap<String, Int>): Int {
    val _i = { i: Int -> inputs[i].toInt() }
    val _v = { i: Int ->
      values.getOrDefault(inputs[i], 0)
    }
    return when (op) {
      "AND" -> _v(0) and _v(1)
      "OR" -> _v(0) or _v(1)
      "LSHIFT" -> _v(0) shl _i(1)
      "RSHIFT" -> _v(0) shr _i(1)
      "NOT" -> {
        var t = _v(0).inv()
        if (t < 0) { t += 65536 }
        t
      }
      else -> _i(0)
    }
  }
}

class Day07(name: String = "07"): Day(name) {
  fun getEquation(s: String): Equation {
    val parts = s.split(" -> ")
    val op = "[A-Z]+".toRegex().find(parts[0])?.value ?: ""
    val inputs = "[a-z]+|\\d+".toRegex()
      .findAll(parts[0]).map{ it.value }.toList()
    return Equation(op, inputs ,parts[1])
  }

  fun part1(list: List<String>): Int {
    val g = Graph()
    val equations: HashMap<String, Equation> = HashMap<String, Equation>()
    val values: HashMap<String, Int> = HashMap<String, Int>()

    list.map { getEquation(it) }.forEach { e ->
      equations.put(e.output, e)
      e.inputs.forEach { input ->
        g.depends(input, e.output)
      }
    }

    val l = g.tsort("a")

    l.forEach { output ->
      values["output"] = equations[output]?.eval(values) ?: 0
    }

    return values["a"] ?: 0
  }


}