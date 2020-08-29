package org.adventofcode

enum class ACTION { Toggle, On, Off }
data class Instruction(
  val y1: Int, val x1: Int,
  val y2: Int, val x2: Int,
  val n: Int = 10,
  val action: ACTION = ACTION.Off
) {
  fun getPos(): List<Int> {
    return (y1..y2).flatMap{ y ->
      (x1..x2).map { x -> y * n + x }
    }
  }
  fun applyArr(arr: Array<Boolean>) : Array<Boolean> {
    when (action) {
      ACTION.Toggle -> getPos().forEach { arr[it] = !arr[it] }
      ACTION.On -> getPos().forEach { arr[it] = true }
      else -> getPos().forEach { arr[it] = false }
    }
    return arr
  }
}

class Day06(name: String): Day(name) {
  private val n = 1000

  fun getInstruction(s: String): Instruction {
    val (y0, x0, y1, x1) = extractNumbers(s)
    val action = when (s[6]) {
      ' ' -> ACTION.Toggle
      'n' -> ACTION.On
      else -> ACTION.Off
    }
    return Instruction(y0, x0, y1, x1, n, action)
  }

  fun part1(list: List<String>): Int {
    val arr = Array<Boolean>(n*n){ false }
    list
      .map { getInstruction(it) }
      .forEach { it.applyArr(arr) }
    return arr.count { it }
  }

}