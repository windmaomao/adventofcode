module Main where

import Data.List.Split

main :: IO ()
main = do
	fn <- lines <$> readFile "../res/06.input"
	print $ splitOn [""] fn