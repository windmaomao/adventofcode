import React from 'react'
import ReactDOM from 'react-dom'
import { Book } from 'react-brandbook'
import topics from './code/days'

ReactDOM.render(
  <Book
    title={'AdventOfCode'}
    logo={'Eric Wastl'}
    topics={topics}
  />, 
  document.getElementById('root')
)