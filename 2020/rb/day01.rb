#!/usr/bin/ruby

fn = open("../res/01.input")

def fuel(mass)
	mass / 3 - 2
end

input = fn.each_line.map(&:to_i)

puts input.inject(0, :+)