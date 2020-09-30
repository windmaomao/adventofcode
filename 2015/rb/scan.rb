# https://stackoverflow.com/questions/30992959/map-with-accumulator-on-an-array
module Enumerable
  def scan(initial)
    inject([initial]) {|acc, el| acc << yield(acc.last, el) }
  end
end
