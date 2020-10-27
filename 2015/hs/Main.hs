module Main where

toFloor :: Char -> Int
toFloor '(' = 1
toFloor _   = -1

part :: Int -> String -> Int
part n
  | n == 1     = sum . toFloorArr
  | otherwise  = length . toBasement . toFloorArr
  where toFloorArr = map toFloor
        toBasement = (takeWhile (>=0)) . (scanl (+) 0)

main :: IO ()
main = putStrLn $ show $ part 2 "(())))"
