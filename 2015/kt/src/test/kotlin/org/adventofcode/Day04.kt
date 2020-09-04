package org.adventofcode

import java.security.MessageDigest

class Matcher() {
  val md = MessageDigest.getInstance("MD5")

  val md5 = { c: String -> md
    .digest(c.toByteArray())
    .joinToString("") { "%02x".format(it) }
  }

  val match = { secret: String, n: Int ->
    val zeros = "0".repeat(n);
    { i: Int ->
      val s = md5(secret + i.toString())
      s.take(n) == zeros
    }
  }
}

class Day04(name: String): Day(name) {
  fun part(secret: String, n: Int): Int {
    val m = Matcher().match(secret, n)
    return generateSequence(0, Int::inc)
      .map { m(it) }
      .indexOf(true)
  }

  fun part1(secret: String) = part(secret, 5)
  fun part2(secret: String) = part(secret, 6)

}