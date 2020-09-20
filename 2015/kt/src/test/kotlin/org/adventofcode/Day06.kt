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
  fun applyArr(arr: Array<Int>) : Array<Int> {
    when (action) {
      ACTION.Toggle -> getPos().forEach { arr[it] += 2 }
      ACTION.On -> getPos().forEach { arr[it] += 1 }
      else -> getPos().forEach {
        if (arr[it] > 0) arr[it] -= 1
      }
    }
    return arr
  }
}

typealias ArrAction<T> = (Array<T>, Int) -> Unit

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
    val ops: HashMap<ACTION, ArrAction<Boolean>> = hashMapOf(
      ACTION.Toggle to { a, i -> a[i] = !a[i] },
      ACTION.On to { a, i -> a[i] = true },
      ACTION.Off to { a, i -> a[i] = false }
    )

    list
      .map { getInstruction(it) }
      .forEach { ins ->
        ins.getPos().forEach {
          ops[ins.action]?.invoke(arr, it)
        }
      }
    return arr.count { it }
  }

  fun part2(list: List<String>): Int {
    val arr = Array<Int>(n*n){ 0 }
    list
      .map { getInstruction(it) }
      .forEach { it.applyArr(arr) }
    return arr.sum()
  }

}