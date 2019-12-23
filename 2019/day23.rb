require_relative 'utils/intcode'

input = (ARGV[0]&.include?(?,) ? ARGV[0] : ARGF.read).split(?,).map(&method(:Integer)).freeze

ics = (0..49).map { |x| {id: x, ic: Intcode.new(input).continue(input: x), q: []} }
last_to_nat = nil
last_y_sent_by_nat = nil

loop {
  ics.each { |icq|
    ic = icq[:ic]
    ic.continue(input: icq[:q].empty? ? -1 : icq[:q].shift)

    raise "expected output in threes not #{ic.output}" if ic.output.size % 3 != 0

    ic.output.each_slice(3) { |addr, x, y|
      if addr == 255
        puts y if last_to_nat.nil?
        last_to_nat = [x, y].freeze
      else
        ics[addr][:q] << [x, y]
      end
    }
    ic.output.clear
  }

  if ics.all? { |icq| icq[:q].empty? }
    if last_to_nat[1] == last_y_sent_by_nat
      puts last_to_nat[1]
      break
    end
    last_y_sent_by_nat = last_to_nat[1]
    ics[0][:q] << last_to_nat.dup
  end
}