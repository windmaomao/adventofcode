# Haskell Day 3 -- Perfectly Spherical Houses in a Vacuum
Question: Advent of Code 2015, Day 3
```bash
<^^<>v^v^vv<>>>>v^v<>><^^v>vv^^>v^v>v<vv>>v>><
vv>>^>^^<>><>^>vvv>>^vv>^<><>^<v^>^>^><vv^vv^>
v^^vv><<<>v<>v>^<vvv^<^<v<v<^vv^^>>vv^<^^v^><^
^^^^v<^<v<^>>>vv^v^>^<v>^<><v^<^v>>><^v^<<v<<v
<>v>^v<v^v>>^^v<<v<v<<>>>vv>>^v>>^<<<<^><<<><^
```
---- [every](#) https://stackoverflow.com/questions/2026912/how-to-get-every-nth-element-of-an-infinite-list-in-haskell 
## Function
```bash
import Data.List (nub)

type Pos = (a, a)

next :: (Num a) => Pos -> Char -> Pos
next (x,y) '^' = (x, y+1)
next (x,y) 'v' = (x, y-1)
next (x,y) '<' = (x-1, y)
next (x,y) '>' = (x+1, y)
next (x,y) _ = (x,y)

visited :: Num a => [Char] -> [Pos]
visited = scanl next (0,0)

uniqueVisits :: Eq a => [a] -> Int
uniqueVisits = length . nub

-- Nefrubyr's every from StacksOverflow
every :: Int -> [a] -> [a]
every n xs = case drop (n-1) xs of
              (y:ys) -> y : every n ys
              [] -> []
```
## Solution
```bash
part1 :: [Char] -> Int
part1 = uniqueVisits . visited

part2 :: [Char] -> Int
part2 = uniqueVisits . visitedP
  where visitedP ls = visited e ++ visited o
          where e = every 2 ls
                o = every 2 (' ':ls)
```
> We might be able to design a parallel version of `scanl` to avoid visiting two lists, but I'll leave this for future exercise.
### Debug
```bash
>>> part1 <$> readFile "03.input"
>>> part2 <$> readFile "03.input"
```