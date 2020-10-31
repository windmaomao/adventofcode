module Day02 where

type Box = [Int]

paperSize :: Box -> Int
paperSize [l, w, h] = area + minimum d
  where area = sum d * 2
        d = zipWith (*) [l, w, h] [w, h, l]

bowSize :: Box -> Int
bowSize [l, w, h] = vol + minimum edges * 2
  where vol = l*w*h
        edges = [l+w, w+h, h+l]

part1 :: [Box] -> Int
part1 box = sum $ map paperSize box

part2 :: [Box] -> Int
part2 box = sum $ map bowSize box