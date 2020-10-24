module Day01 where

import Prelude
import Data.String.CodeUnits (toCharArray)
import Data.Foldable (sum)
import Data.Array (takeWhile, scanl, length)

toFloor :: Char -> Int
toFloor '(' = 1
toFloor _   = -1

toFloorArr :: String -> Array Int
toFloorArr = map toFloor <<< toCharArray

part1 :: String -> Int
part1 = sum <<< toFloorArr

part2 :: String -> Int
part2 =
  length <<<
  takeWhile (_ > 0) <<<
  scanl (+) 0 <<<
  toFloorArr