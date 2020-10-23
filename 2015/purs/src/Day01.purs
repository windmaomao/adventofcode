module Day01 where

import Prelude
import Data.Foldable
import Data.String.CodeUnits
import Data.Array (takeWhile, scanl, length)

floor :: Char -> Int
floor '(' = 1
floor c = -1

part1 =
  sum <<<
  map floor <<<
  toCharArray

part2 =
  length <<<
  takeWhile (_ > 0) <<<
  scanl (+) 0 <<<
  map floor <<<
  toCharArray