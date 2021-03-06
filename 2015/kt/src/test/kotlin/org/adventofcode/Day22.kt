package org.adventofcode

/*
 * Missile: 0, Drain: 1, Shield: 2, Poison: 3, Recharge: 4
 */

data class Battle(
  val maxHp: Int,
  val maxMana: Int,
  val bossMaxHp: Int,
  val bossDamage: Int
) {
  val costs = listOf(53, 73, 113, 173, 229)
  var hp = maxHp
  var mana = maxMana
  var armor = 0
  var bossHp = bossMaxHp

  var shield = 0
  var poison = 0
  var recharge = 0
  var spent = 0

  // effect turn
  fun effect() {
    if (shield > 0) { shield-- } else { armor = 0 }
    if (poison > 0) { poison--; bossHp -= 3 }
    if (recharge > 0) { recharge--; mana += 101 }
  }

  // player turn
  fun player(spell: Int) {
    if (spell < 0) return

    val cost = costs[spell]
    spent += cost
    mana -= cost
    when (spell) {
      0 -> { bossHp -= 4 }
      1 -> { bossHp -= 2; hp += 2 }
      2 -> { armor = 7; shield = 6 }
      3 -> { poison = 6 }
      4 -> { recharge = 5 }
      else -> {}
    }
  }

  // boss turn
  fun boss() {
    val damage = bossDamage - armor
    hp -= if (damage > 1) damage else 1
  }

  fun canCast(spell: Int): Boolean {
    if (hp < 1) return false
    val cost = costs[spell]
    if (cost > mana) return false
    when (spell) {
      2 -> { return shield == 0 }
      3 -> { return poison == 0 }
      4 -> { return recharge == 0 }
    }
    return true
  }

}


data class Day22(
  val maxHp: Int, val maxMana: Int,
  val bossMaxHp: Int, val bossDamage: Int
) {

  fun battleSpent(minSpent: Int, hard: Boolean): Int {
    val b = Battle(maxHp, maxMana, bossMaxHp, bossDamage)
    if (hard) b.hp--
    while (b.hp > 0) {
      if (b.spent > minSpent) return minSpent

      b.effect()
      val spells = (0..4).filter { b.canCast(it) }
      if (spells.size < 1) return minSpent
      b.player(spells.random())

      b.effect()
      if (b.bossHp < 1) return b.spent
      b.boss()
      if (hard) b.hp--
    }
    return minSpent
  }

  @OptIn(ExperimentalStdlibApi::class)
  fun part(hard: Boolean) = (0..1000000)
    .scan(100000) { acc, _ -> battleSpent(acc, hard) }
    .last()

  fun part1() = part(false)
  fun part2() = part(true)

}