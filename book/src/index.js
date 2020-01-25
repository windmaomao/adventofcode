import React from 'react'
import ReactDOM from 'react-dom'
import { Book } from 'react-brandbook'
import code from './code'

ReactDOM.render(
  <Book
    title={'AdventOfCode'}
    logo={'Eric Wastl'}
    topics={code.topics}
  />, 
  document.getElementById('root')
)