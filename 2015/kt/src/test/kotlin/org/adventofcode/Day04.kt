package org.adventofcode

import java.security.MessageDigest

class Day04(name: String): Day(name) {
  val md = MessageDigest.getInstance("MD5")
  val md5 = { c: String ->
    md.digest(c.toByteArray()).joinToString("") {
      "%02x".format(it)
    }
  }
}