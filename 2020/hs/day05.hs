module Main where

import Data.List (sort)

binary (l, h) c
	| (c == 'F') || (c == 'L') = (l, mid)
	| c == 'B' || (c == 'R') = (mid + 1, h)
	where mid = (h + l) `div` 2

seat str = row * 8 + col
  where row = fst $ find (0, 127) $ take 7 str
        col = fst $ find (0, 7) $ drop 7 str
        find r s = foldl binary r s
				
part1 = maximum

quicksort :: Ord a => [a] -> [a]
quicksort []     = []
quicksort (p:xs) = (quicksort lesser) ++ [p] ++ (quicksort greater)
  where
    lesser  = filter (< p) xs
    greater = filter (>= p) xs
		
part2 seats = [x | x <- zip' sorted, fst x /= snd x - 1]
  where
    sorted = quicksort seats
    zip' a = zip a (drop 1 a)

main :: IO ()
main = do
  fn <- lines <$> readFile "../res/05.input"
  let seats = seat <$> fn
  print $ (part1 seats, part2 seats)
