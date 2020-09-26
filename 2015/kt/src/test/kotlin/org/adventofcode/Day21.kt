package org.adventofcode

data class Item(
  val name: String,
  val cost: Int,
  val damage: Int,
  val armor: Int
) {}

data class Profile(val items: List<Item>) {
  fun name() = items.map { it.name }.joinToString("/")
  fun cost() = items.sumBy { it.cost }
  fun damage() = items.sumBy { it.damage }
  fun armor() = items.sumBy { it.armor }
  fun toItem() = Item(name(), cost(), damage(), armor())
}

class Day21 {
  val weapons = listOf(
    Item("D", 8, 4, 0),
    Item("S", 10, 5, 0),
    Item("W", 25, 6, 0),
    Item("L", 40, 7, 0),
    Item("G", 74, 8, 0)
  )

  val armors = listOf(
    Item("N", 0, 0, 0),
    Item("L", 13, 0, 1),
    Item("C", 31, 0, 2),
    Item("S", 53, 0, 3),
    Item("B", 75, 0, 4),
    Item("P", 102, 0, 5)
  )

  val rings = listOf(
    Item("NN", 0, 0, 0),
    Item("W1", 25, 1, 0),
    Item("W2", 50, 2, 0),
    Item("W3", 100, 3, 0),
    Item("A1", 20, 0, 1),
    Item("A2", 40, 0, 2),
    Item("A3", 80, 0, 3)
  )

  fun getProfiles(): List<Profile> {
    val profiles = mutableListOf<Profile>()
    weapons.forEach { w ->
      armors.forEach { a ->
        rings.forEach { r ->
          profiles.add(Profile(listOf(w, a, r)))
        }
      }
    }
    return profiles
  }

  fun fight(
    me: Item, meMaxHp: Int,
    boss: Item, bossMaxHp: Int
  ): Boolean {
    var meHp = meMaxHp
    var bossHp = bossMaxHp
    while (true) {
      val bossLoss = me.damage - boss.armor
      bossHp -= if (bossLoss > 1) bossLoss else 1
      if (bossHp <= 0) return true

      val meLoss = boss.damage - me.armor
      meHp -= if (meLoss > 1) meLoss else 1
      if (meHp <= 0) return false
    }
  }

  fun part1(): Item? {
    val profiles = getProfiles()
    val boss = Item("Boss", 0, 8, 1)
    val bossMaxHp = 104
    val meMaxHp = 100
    val s = profiles
      .map { it.toItem() }
      .filter { fight(it, meMaxHp, boss, bossMaxHp) }
      .minBy { it.cost }

    return s
  }

}