module Test.Main where

import Prelude

import Effect (Effect)
import Effect.Class.Console (log, logShow)
import Day01 (floor, part1)

main :: Effect Unit
main = do
  log "🍝"
  (logShow <<< part1) "^^vv"
