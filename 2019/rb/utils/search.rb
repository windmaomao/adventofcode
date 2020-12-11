require_relative 'priority_queue'

# Breadth-first search
# Traversing or searching tree structures. 
# - It starts at the tree root and explores all of the neighbor nodes
#   at the present depth prior to moving on to the nodes 
#   at the next depth level.
# - The parent attribute of each node is useful for accessing the nodes
#   in a shortest path, by backtracking from the destination node 
#   up to the starting node.

module Search
  module_function

  # Path of node to origin 
  # Given path map and node
  def path_of(prevs, n)
    path = [n]
    current = n
    while (current = prevs[current])
      path.unshift(current)
    end
    path
  end

  #! A* search from start to goal
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

  #! BFS search path from start to goal
  # Input:
  # - start: starting node
  # - neighbours: neighbour nodes array
  # - goal: goal of node map, { node: true }
  # - num_goals: number of goals allowed
  # Output:
  # - gen: total moves when finished
  # - goals: goals reached with moves for each goal
  # - prev: lastest path map
  # Notes:
  # - node is specified in key like string format
  # - the search stops at the last reacheable node
  def bfs(start, num_goals: 1, neighbours:, goal:)
    current_gen = [start]                 # discovered nodes
    prev = {start => nil}                 # lastest path map
    goals = {}                            # goals reached with moves
    gen = -1                              # moves

    until current_gen.empty?
      gen += 1                            # next move
      next_gen = []
      while (cand = current_gen.shift)    # dequeue 
        goals[cand] = gen if goal[cand]   #   record goal if reached

        neighbours[cand].each { |neigh|   #   for all neighbours
          next if prev.has_key?(neigh)    #     skip if in path
          prev[neigh] = cand              #     update path map
          next_gen << neigh               #     enqueue
        } if goals.size < num_goals       #   skip if goal is reached
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
