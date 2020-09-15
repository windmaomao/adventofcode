package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day12Test {
  private val d: Day12 = Day12()
  val line = parseFile("12")[0]

  @Test
  fun day12Passwords() {
    assertEquals(6, d.sum("[1,2,3]"))
    assertEquals(6, d.sum("""{"a":2,"b":4}"""))
    assertEquals(3, d.sum("[[[3]]]"))
    assertEquals(3, d.sum("""{"a":{"b":4},"c":-1}"""))
    assertEquals(0, d.sum("""{"a":[-1,1]}"""))
    assertEquals(0, d.sum("""[-1,{"a":1}]"""))
    assertEquals(0, d.sum("[]"))
    assertEquals(0, d.sum("{}"))
  }

  @Test
  fun day12Part1() {
    assertEquals(156366, d.part1(line))
  }

  @Test
  fun day12Part2Example() {
    assertEquals(6, d.part2("""[1,2,3]"""))
    assertEquals(4, d.part2("""[1,{"c":"red","b":2},3]"""))
    assertEquals(0, d.part2("""{"d":"red","e":[1,2,3,4],"f":5}"""))
    assertEquals(6, d.part2("""[1,"red",5]"""))
    assertEquals(0, d.part2("""{"a":[{"a":"red","b":4},3],"b":"red"}"""))
  }

  @Test
  fun day12Part2() {
    assertEquals(96852, d.part2(line))
  }

}