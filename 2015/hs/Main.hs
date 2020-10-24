module Main where

toFloor :: Char -> Int
toFloor '(' = 1
toFloor _   = -1

part1 :: String -> Int
part1 = sum . (map toFloor)

part2 :: String -> Int
part2 x = length $
  takeWhile (>=0) $
  scanl (+) 0 $
  map toFloor x

main :: IO ()
main = putStrLn $ show $ part2 "(())))"
