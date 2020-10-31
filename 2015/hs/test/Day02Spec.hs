module Day02Spec (spec) where

import Test.Hspec
import System.IO
import Day02

splitBy delimiter = foldr f [[]]
            where f c l@(x:xs) | c == delimiter = []:l
                               | otherwise = (c:x):xs

rInt :: String -> Int
rInt = read

toBox = (map rInt) . (splitBy 'x')

spec :: Spec
spec = do
  describe "day02" $ do
    it "example" $ do
      paperSize [2,3,4] `shouldBe` 58
      paperSize [1,1,10] `shouldBe` 43
    it "part" $ do
      f <- readFile "../res/02.input"
      let boxes = map toBox $ lines f
      part1 boxes `shouldBe` 1588178
      part2 boxes `shouldBe` 3783758
