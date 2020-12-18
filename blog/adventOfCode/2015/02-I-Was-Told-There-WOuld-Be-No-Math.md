# Haskell Day 2 - I was Told There Would Be No Math
Question: Advent of Code 2015, Day 2
```bash
3x11x24
13x5x19
1x9x27
24x8x21
6x8x17
```
## Function
```haskell
type Box = [Char]

split :: Box -> [Int]
split "" = []
split s = fp : rest
  where parts = break (=='x') s
        fp = read (fst parts)::Int
        rest = split $ drop 1 $ snd parts

wrapBox :: [Int] -> Int
wrapBox b@(l:w:h:[]) = area + minimum b
  where area = sum d * 2
        d = zipWith (*) [l, w, h] [w, h, l]
```
## Solution
```haskell
part1 :: (Foldable t, Functor t) => t Box -> Int
part1 ls = sum $ fmap (wrapBox . split) ls
```
## Debug
```haskell
>>> part1 <$> lines <$> getLine
>>> part1 <$> lines <$> readFile "02.input"
```