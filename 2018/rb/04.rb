require 'set'

fn = open("2018/input/04a")

def parseLine(str)
  sp = str.split("] ")
  datetime = sp[0][1, 16]
  dp = datetime.split(" ")
  date = dp[0]
  hp = dp[1].split(":")
  hour, minute = hp
  action = case sp[1]
  when "falls asleep"
    ["", "sleep"]
  when "wakes up"
    ["", "wake"]
  else
    pp = sp[1].split(/[# @,:x]/)
    [pp[2], "start"]
  end
  [date, hour, minute] + action
end

guards = Hash.new { |h, k| h[k] = [] }

input = fn.each_line.map(&:chomp).map{|str| 
  date, hour, minute, id, action = parseLine(str)
  [date, hour, minute, id, action]
}.sort_by{ |l| 
  l[0]+l[1]+l[2] 
}.slice_before{ |l| 
  !l[3].empty? 
}.to_a

# Part 1
def sleepTime(arr)
  # arr.each{|r| p r}
  sleeps = Array.new(60, 0)
  arr.each_cons(2) { |p| 
    if (p[0][4] == 'sleep') 
      i = p[0][2].to_i
      j = p[1][2].to_i - 1
      (i..j).each{|k| sleeps[k] = 1}
    end
  }
  p sleeps.map{|x| x > 0 ? '#' : '.'}.join('')
  sleeps
end

guards = Hash.new{ |h, k| h[k] = {
  "id" => 0,
  "days" => [],
  "slepts" => 0
}}
input.take(5).map{|g| 
  id = g[0][3]
  time = sleepTime(g)
  guards[id]["days"].push(time)
  guards[id]["slepts"] += time.inject(&:+)
}
p guards.max_by{|k, v| v["slepts"] }[0]
