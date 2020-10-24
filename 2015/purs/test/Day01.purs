module Test.Day01 where

import Prelude
import Test.Unit (suite, test)
import Test.Unit.Main (runTest)
import Test.Unit.Assert as Assert
import Effect (Effect)

-- import Node.FS (FS)
import Node.Encoding (Encoding(..))
import Node.FS.Sync (readTextFile)
import Effect.Class.Console (log)

import Day01 (part1)
import Data.Array (head)

main :: Effect Unit
main = runTest do
  suite "Day01" do
    test "part1 example" do
      Assert.equal (0) (part1 "(())")
      Assert.equal (3) (part1 "(((")
      Assert.equal (-3) (part1 ")())())")
      -- Assert.equal (0) (part1 $ readTextFile ASCII "../res/01.input")
