module Test.Main where

import Prelude
import Effect (Effect)
import Effect.Console (log)
import Node.Encoding (Encoding(..))
import Node.FS.Sync (readTextFile)

calc :: String -> Int
calc _ = 456

main :: Effect Unit
main = do
  text <- readTextFile ASCII "../res/00.input"
  log $ "🍝  " <> (show $ calc text)