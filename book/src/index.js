import React from 'react'
import ReactDOM from 'react-dom'
import { Book } from 'react-brandbook'
import days from './days'

ReactDOM.render(
  <Book
    title={'AdventOfCode'}
    logo={'Eric Wastl'}
    topics={days}
  />, 
  document.getElementById('root')
)