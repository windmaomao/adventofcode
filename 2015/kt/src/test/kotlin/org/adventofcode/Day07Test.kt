package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class Day07Test {
  private val d: Day07 = Day07()

  @Test
  fun day07Equation() {
    val v: HashMap<String, Int> = HashMap<String, Int>()
    assertEquals(123, Equation("", listOf("123"),"x").eval(v))
    v.put("x", 123);
    assertEquals(456, Equation("", listOf("456"),"y").eval(v))
    v.put("y", 456);
    assertEquals(72, Equation("AND", listOf("x", "y"),"d").eval(v))
    v.put("d", 72);
    assertEquals(507, Equation("OR", listOf("x", "y"),"e").eval(v))
    v.put("e", 507);
    assertEquals(492, Equation("LSHIFT", listOf("x", "2"),"f").eval(v))
    v.put("f", 492);
    assertEquals(114, Equation("RSHIFT", listOf("y", "2"),"g").eval(v))
    v.put("g", 114);
    assertEquals(65412, Equation("NOT", listOf("x"),"h").eval(v))
    v.put("h", 65412);
  }

  @Test
  fun day07Part1GetEquation() {
    val (op, inputs, output) = d.getEquation("x LSHIFT 2 -> f")
    assertEquals(
      listOf("LSHIFT", listOf("x", "2"), "f"),
      listOf(op, inputs, output)
    )
  }

  @Test
  fun day07Part1Example() {
    val list: List<String> = listOf(
      "123 -> x",
      "456 -> y",
      "x AND y -> d",
      "x OR y -> e",
      "x LSHIFT 2 -> f",
      "y RSHIFT 2 -> g",
      "NOT x -> h",
      "NOT y -> i"
    )

    val topologyList = d.getTopologyList(list, "d")
    assertEquals(arrayListOf("123", "x", "456", "y", "d"), topologyList)
    val values = d.calcEquations(topologyList)
    assertEquals(72, values["d"])
  }

  @Test
  fun day07Part1() {
    assertEquals(16076, d.part1(d.lines))
  }
}