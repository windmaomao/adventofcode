require_relative 'priority_queue'

module Search
  module_function

  def path_of(prevs, n)
    path = [n]
    current = n
    while (current = prevs[current])
      path.unshift(current)
    end
    path
  end

  def astar(start, neighbours:, heuristic:, goal:)
    g_score = Hash.new(1.0 / 0.0)
    g_score[start] = 0

    closed = {}
    open = PriorityQueue.new
    open[start] = heuristic[start]
    prev = {}

    while (current = open.pop)
      closed[current] = true

      return [g_score[current], path_of(prev, current)] if goal[current]

      neighbours[current].each { |neighbour, cost|
        next if closed[neighbour]
        tentative_g_score = g_score[current] + cost
        next if tentative_g_score >= g_score[neighbour]

        prev[neighbour] = current
        g_score[neighbour] = tentative_g_score
        open[neighbour] = tentative_g_score + heuristic[neighbour]
      }
    end

    nil
  end

  def bfs(start, num_goals: 1, neighbours:, goal:)
    current_gen = [start]
    prev = {start => nil}
    goals = {}
    gen = -1

    until current_gen.empty?
      gen += 1
      next_gen = []
      while (cand = current_gen.shift)
        goals[cand] = gen if goal[cand]

        neighbours[cand].each { |neigh|
          next if prev.has_key?(neigh)
          prev[neigh] = cand
          next_gen << neigh
        } if goals.size < num_goals
      end
      current_gen = next_gen if goals.size < num_goals
    end

    {
      gen: gen,
      goals: goals,
      prev: prev,
    }
  end
end
