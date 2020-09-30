require "test/unit"
require_relative "Day01"

class Day01Test < Test::Unit::TestCase
  def setup
    floor = ->(c) { c == '(' ? 1 : -1 }
    @ops = open("../res/01.input")
      .each_line().to_a[0]
      .chars.map(&floor)
  end

  def test_part1
    assert_equal(280, part1(@ops))
  end

  def test_part2
    assert_equal(1797, part2(@ops))
  end
end
