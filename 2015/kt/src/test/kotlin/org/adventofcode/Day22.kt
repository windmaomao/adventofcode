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

  fun effect() {
    if (shield > 0) { shield-- } else { armor = 0 }
    if (poison > 0) { poison--; bossHp -= 3 }
    if (recharge > 0) { recharge--; mana += 101 }
  }

  fun player(spell: Int) {
    val cost = costs[spell]
    spent += cost
    mana -= cost
    when (spell) {
      0 -> { bossHp -= 4 }
      1 -> { bossHp -= 2; hp += 2 }
      2 -> { armor += 7; shield = 6 }
      3 -> { poison = 6 }
      4 -> { recharge = 5 }
      else -> {}
    }
  }

  fun boss() {
    val damage = bossDamage - armor
    hp -= if (damage > 1) damage else 1
  }
}


class Day22 {


}