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
    Item("NNNN", 0, 0, 0),
    Item("W1NN", 25, 1, 0),
    Item("W2NN", 50, 2, 0),
    Item("W3NN", 100, 3, 0),
    Item("A1NN", 20, 0, 1),
    Item("A2NN", 40, 0, 2),
    Item("A3NN", 80, 0, 3),
    Item("W1W2", 75, 3, 0),
    Item("W1W3", 125, 4, 0),
    Item("W1A1", 45, 1, 1),
    Item("W1A2", 65, 1, 2),
    Item("W1A3", 105, 1, 3),
    Item("W2W3", 125, 4, 0),
    Item("W2A1", 70, 2, 1),
    Item("W2A2", 90, 2, 2),
    Item("W2A3", 130, 2, 3),
    Item("W3A1", 120, 3, 1),
    Item("W3A2", 140, 3, 2),
    Item("W3A3", 180, 3, 3),
    Item("A1A2", 60, 0, 3),
    Item("A1A3", 100, 0, 4),
    Item("A2A3", 120, 0, 5)
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

  fun part1(): Int {
    val profiles = getProfiles()
    val boss = Item("Boss", 0, 8, 1)
    val bossMaxHp = 104
    val meMaxHp = 100
    val s = profiles
      .map { it.toItem() }
      .filter { fight(it, meMaxHp, boss, bossMaxHp) }
      .minBy { it.cost }

    return s?.cost ?: 0
  }

  fun part2(): Int {
    val profiles = getProfiles()
    val boss = Item("Boss", 0, 8, 1)
    val bossMaxHp = 104
    val meMaxHp = 100
    val s = profiles
      .map { it.toItem() }
      .filter { !fight(it, meMaxHp, boss, bossMaxHp) }
      .maxBy { it.cost }

    return s?.cost ?: 0
  }
}