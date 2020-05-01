module Main where

import Data.List (foldl')

part1 :: IO ()
part1 = readFile "01.input" >>= print . last . calcFloor

part2 :: IO ()
part2 = readFile "01.input" >>= print . reachesBasementPosition

reachesBasementPosition :: String -> Int
reachesBasementPosition = length . takeWhile (/= -1) . calcFloor

calcFloor :: String -> [Int]
calcFloor s = scanl step 0 s
  where step c '(' = c + 1
        step c ')' = c - 1