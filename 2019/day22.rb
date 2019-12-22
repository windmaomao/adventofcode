def simplify_at(steps, i, deck_size)
  return unless (op2, arg2 = steps[i + 1])
  op1, arg1 = steps[i]

  # Adjacent pairs of the same operation can be combined.
  # (dealwith by multiplication, cut by addition, reverse by elimination)
  #
  # Adjacent pairs of different operation can be transposed,
  # if applying an appropriate transformation to the pair
  # (see each pair for details on its appropriate transformation).
  #
  # Sift all dealwith to the front of the list,
  # and all reverse to the back of the list.
  #
  # Applied enough times, the list should end with just one of each operation.
  case [op1, op2]
  when [:dealwith, :dealwith]
    steps[i, 2] = [
      [:dealwith, (arg1 * arg2) % deck_size].freeze,
    ]
  when [:cut, :dealwith]
    steps[i, 2] = [
      steps[i + 1],
      [:cut, (arg1 * arg2) % deck_size].freeze,
    ]
  when [:cut, :cut]
    steps[i, 2] = [
      [:cut, (arg1 + arg2) % deck_size].freeze,
    ]
  when [:reverse, :dealwith]
    steps[i, 2] = [
      [:dealwith, arg2].freeze,
      [:cut, -arg2 + 1].freeze,
      [:reverse].freeze,
    ]
  when [:reverse, :cut]
    steps[i, 2] = [
      [:cut, -arg2].freeze,
      [:reverse].freeze,
    ]
  when [:reverse, :reverse]
    steps[i, 2] = []
  end
end

def simplify(steps, deck_size)
  until steps.map(&:first).uniq == steps.map(&:first)
    steps.each_index { |i| simplify_at(steps, i, deck_size) }
  end
end

def modular_inverse(a, n)
  t, newt = [0, 1]
  r, newr = [n, a]
  until newr == 0
    q = r / newr
    puts "q: #{r} #{newr} #{q}"
    t, newt = [newt, t - q * newt]
    puts "t: #{t} #{newt}"
    r, newr = [newr, r - q * newr]
  end
  r > 1 ? nil : t % n
end

puts modular_inverse(3, 10)