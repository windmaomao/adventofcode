package org.adventofcode

import java.security.MessageDigest

class Day04(name: String): Day(name) {
  val md = MessageDigest.getInstance("MD5")
  val md5 = { c: String ->
    md.digest(c.toByteArray()).joinToString("") {
      "%02x".format(it)
    }
  }

  fun match(secret: String, n: Int): (Int) -> Boolean {
    val zeros: String = "0".repeat(n)
    return { i: Int ->
      val s = md5(secret + i.toString())
      s.take(n).equals(zeros)
    }
  }

  fun part(secret: String, n: Int): Int {
    val m = match(secret, n)
    var i = 0
    while (!m(i)) { i++ }
    return i
  }
  
  fun part1(secret: String): Int {
    return part(secret, 5)
  }

  fun part2(secret: String): Int {
    return part(secret, 6)
  }

}