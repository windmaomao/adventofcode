package org.adventofcode

import java.security.MessageDigest

val md = MessageDigest.getInstance("MD5")
val md5 = { c: String -> md
  .digest(c.toByteArray())
  .joinToString("") { "%02x".format(it) }
}

typealias Matcher = (Int) -> Boolean

class Day04(name: String): Day(name) {
  fun matcher(secret: String, n: Int): Matcher {
    val zeros = "0".repeat(n);
    return { i: Int ->
      val s = md5(secret + i.toString())
      s.take(n) == zeros
    }
  }

  private fun genSeq() = generateSequence(0, Int::inc)
  private fun part(m: Matcher) = genSeq()
    .map { m(it) }
    .indexOf(true)

  fun part1(secret: String) = part(matcher(secret, 5))
  fun part2(secret: String) = part(matcher(secret, 6))

}