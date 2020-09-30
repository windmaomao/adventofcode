require "test/unit"
require_relative "Day01"

class Day01Test < Test::Unit::TestCase
  def setup
    @d = Day01.new()
    @ops = open("../res/01.input")
      .each_line().to_a[0]
      .chars.map { |e| e == '(' ? 1 : -1 }
  end

  def test_part1
    assert_equal(280, @d.part1(@ops))
  end
end
