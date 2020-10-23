module Day01 where

import Prelude
import Data.Foldable
import Data.String.CodeUnits

floor :: Char -> Int
floor x = 3

part1 = sum <<< map floor <<< toCharArray