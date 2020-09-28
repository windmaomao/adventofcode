package org.adventofcode

data class Instr(
  val name: String,
  val pos: Int,
  val rel: Int
) {}

data class Registry(
  val list: List<Instr>,
  val start: Int = 0
) {
  val vars = arrayOf(start, 0)

  fun run(): List<Int> {
    var i = 0
    while (i >= 0 && i < list.size) {
      val ins = list[i]
      val p = ins.pos
      when (ins.name) {
        "hlf" -> { vars[p] /= 2; i++ }
        "tpl" -> { vars[p] *= 3; i++ }
        "inc" -> { vars[p] += 1; i++ }
        "jmp" -> { i+= ins.rel }
        "jie" -> {
          when (vars[p].rem(2)) {
            0 -> i += ins.rel
            else -> i++
          }
        }
        "jio" -> {
          when (vars[p]) {
            1 -> i += ins.rel
            else -> i++
          }
        }
        else -> {}
      }
    }
    return vars.toList()
  }
}

class Day23 {
  fun getInstr(s: String): Instr {
    val parts = s.split(", ")
    val nums = s.extractNumbers(true)
    val p1 = parts[0].split(" ")
    val index = if (p1[1] == "a") 0 else 1
    val rel = if (nums.size > 0) nums[0] else 1
    return Instr(p1[0], index, rel)
  }

  fun part1(list: List<Instr>): Int = Registry(list)
    .run().last()
  fun part2(list: List<Instr>): Int = Registry(list, 1)
    .run().last()

}