package main

import "fmt"
import "strings"

const world1 = `
#########
#b.A.@.a#
#########`

type Pos = [2]int

type World struct {
  Maze []string
  KeysTaken []byte
}

func (w World) Char(p Pos) byte {
  return w.Maze[p[0]][p[1]]
}

func (w World) FindKeys(pos Pos) byte {
  return w.Char(pos)
}

func main() {
  w := World {
    Maze: strings.Split(world1, "\n")[1:],
  }
  p := Pos{1,1}
  
  fmt.Println(w.FindKeys(p))
}