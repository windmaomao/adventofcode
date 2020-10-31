module Day01Spec (spec) where

import Test.Hspec
import System.IO
import Day01 (part)

spec :: Spec
spec = do
  describe "day01" $ do
    it "part1 example" $ do
      part 1 "(())" `shouldBe` 0
      part 1 "(((" `shouldBe` 3
      part 1 ")())())" `shouldBe` -3
    it "part1" $ do
      f <- readFile "../res/01.input"
      part 1 f `shouldBe` 280
      part 2 f `shouldBe` 1797