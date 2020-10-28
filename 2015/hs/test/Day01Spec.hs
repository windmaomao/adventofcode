module Day01Spec (spec) where

import Test.Hspec
import Day01 (part)

spec :: Spec
spec = do
  describe "day01" $ do
    it "part1 example" $ do
      part 1 "(())" `shouldBe` 0
      part 1 "(((" `shouldBe` 3
      part 1 ")())())" `shouldBe` -3
