package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day22Test {
  private val d: Day22 = Day22(50, 500, 51, 9)

  @Test
  fun day22Battle1() {
    val b = Battle(10, 250, 13, 8)
    // Player turn
    assertEquals(10, b.hp)
    assertEquals(250, b.mana)
    assertEquals(13, b.bossHp)
    b.effect()
    b.player(3)
    // Boss turn
    assertEquals(10, b.hp)
    assertEquals(77, b.mana)
    assertEquals(13, b.bossHp)
    b.effect()
    assertEquals(5, b.poison)
    b.boss()
    // Player turn
    assertEquals(2, b.hp)
    assertEquals(77, b.mana)
    assertEquals(10, b.bossHp)
    b.effect()
    assertEquals(4, b.poison)
    b.player(0)
    // Boss turn
    assertEquals(2, b.hp)
    assertEquals(24, b.mana)
    assertEquals(3, b.bossHp)
    b.effect()
    assertEquals(3, b.poison)
    b.boss()
    // End
    assertEquals(0, b.bossHp)
  }

  @Test
  fun day22Battle2() {
    val b = Battle(10, 250, 14, 8)
    // Player turn
    assertEquals(10, b.hp)
    assertEquals(250, b.mana)
    assertEquals(14, b.bossHp)
    b.effect()
    b.player(4)
    // Boss turn
    assertEquals(10, b.hp)
    assertEquals(21, b.mana)
    assertEquals(14, b.bossHp)
    b.effect()
    assertEquals(4, b.recharge)
    b.boss()
    // Player turn
    assertEquals(2, b.hp)
    assertEquals(122, b.mana)
    assertEquals(14, b.bossHp)
    b.effect()
    assertEquals(3, b.recharge)
    b.player(2)
    // Boss turn
    assertEquals(2, b.hp)
    assertEquals(7, b.armor)
    assertEquals(110, b.mana)
    assertEquals(14, b.bossHp)
    b.effect()
    assertEquals(2, b.recharge)
    assertEquals(5, b.shield)
    b.boss()
    // Player turn
    assertEquals(1, b.hp)
    assertEquals(7, b.armor)
    assertEquals(211, b.mana)
    assertEquals(14, b.bossHp)
    b.effect()
    assertEquals(1, b.recharge)
    assertEquals(4, b.shield)
    b.player(1)
    // Boss turn
    assertEquals(3, b.hp)
    assertEquals(7, b.armor)
    assertEquals(239, b.mana)
    assertEquals(12, b.bossHp)
    b.effect()
    assertEquals(0, b.recharge)
    assertEquals(3, b.shield)
    b.boss()
    // Player turn
    assertEquals(2, b.hp)
    assertEquals(7, b.armor)
    assertEquals(340, b.mana)
    assertEquals(12, b.bossHp)
    b.effect()
    assertEquals(2, b.shield)
    b.player(3)
    // Boss turn
    assertEquals(2, b.hp)
    assertEquals(7, b.armor)
    assertEquals(167, b.mana)
    assertEquals(12, b.bossHp)
    b.effect()
    assertEquals(1, b.shield)
    assertEquals(5, b.poison)
    b.boss()
    // Player turn
    assertEquals(1, b.hp)
    assertEquals(7, b.armor)
    assertEquals(167, b.mana)
    assertEquals(9, b.bossHp)
    b.effect()
    assertEquals(0, b.shield)
    assertEquals(4, b.poison)
    b.player(0)
    // Boss turn
    assertEquals(1, b.hp)
    assertEquals(114, b.mana)
    assertEquals(2, b.bossHp)
    b.effect()
    assertEquals(3, b.poison)
    assertEquals(0, b.armor)
    b.boss()
    // End
    assertEquals(-1, b.bossHp)
  }

  @Test
  fun day22Part1() {
    assertEquals(900, d.part1())
  }

  @Test
  fun day22Part2() {
    assertEquals(1216, d.part2())
  }

}