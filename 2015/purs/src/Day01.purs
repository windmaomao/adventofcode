module Day01 where

import Prelude
import Data.String.CodeUnits (toCharArray)
import Data.Foldable (sum)
import Data.Array (takeWhile, scanl, length)

floor :: Char -> Int
floor '(' = 1
floor c = -1

part1 :: String -> Int
part1 =
  sum <<<
  map floor <<<
  toCharArray

part2 :: String -> Int
part2 =
  length <<<
  takeWhile (_ > 0) <<<
  scanl (+) 0 <<<
  map floor <<<
  toCharArray