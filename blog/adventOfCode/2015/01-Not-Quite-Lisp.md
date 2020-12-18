# Haskell Day 1 - Not Quite Lisp
Question: Advent of Code 2015, Day 1
```bash
()()(()()()(()()((()((()))((()((((()()((((((
)()(()()()(()()((()((()))((()((((()()((((())
)()((((())(((((((()(((((((((()(((())(()()(()
((()()(()(())(()((((()((()()()((((())(((((((
)(()(((()())(()((((()))())(())(()(()()))))))
```
## Function

Assign each char with a number, ex. `-1` or `1`.
```haskell
step :: Num t => Char -> t
step '(' = 1
step ')' = -1
step _ = 0

floor :: (Functor f, Num b) => f Char -> f b
floor s = step <$> s
```
## Solution
The solution is based on the floor modeled as a number array.
```haskell
part1 :: [Char] -> Int
part1 s = sum $ floor s

part2 :: [Char] -> Int
part2 s = length $ takeWhile (>=0) $ scanl (+) 0 $ floor s
```
## Debug
```haskell
>>> part1 <$> getLine
>>> part2 <$> getLine
```
