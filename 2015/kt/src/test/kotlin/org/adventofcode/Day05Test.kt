package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class Day05Test {
  private val d = Day05("05")

  @Test
  fun day05Part1Example() {
    assertEquals(true, d.matches1("ugknbfddgicrmopn"));
    assertEquals(true, d.matches1("aaa"));
    assertEquals(false, d.matches1("jchzalrnumimnmhp"));
    assertEquals(false, d.matches1("haegwjzuvuyypxyu"));
    assertEquals(false, d.matches1("dvszwmarrgswjxmb"));
  }

  @Test
  fun day05Part1()  {
    assertEquals(255, d.day1(d.lines))
  }

  @Test
  fun day05Part2Example() {
    assertEquals(true, d.matches2("qjhvhtzxzqqjkmpb"));
    assertEquals(true, d.matches2("xxyxx"));
    assertEquals(false, d.matches2("uurcxstgmygtbstg"));
    assertEquals(false, d.matches2("ieodomkazucvgmuy"));
  }

  @Test
  fun day05Part2()  {
    assertEquals(55, d.day2(d.lines))
  }

}