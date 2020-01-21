import React from 'react'
import ReactDOM from 'react-dom'
import { Book } from 'react-brandbook'
import days from './days'
import patterns from './patterns'

const topics = days.concat(patterns)

ReactDOM.render(
  <Book
    title={'AdventOfCode'}
    logo={'Eric Wastl'}
    topics={topics}
  />, 
  document.getElementById('root')
)