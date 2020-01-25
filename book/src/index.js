import React from 'react'
import ReactDOM from 'react-dom'
import { Book } from 'react-brandbook'
import code from './code'
import blog from './blog'

const allTopics = [
  ...code.topics, 
  ...blog.topics,
]

ReactDOM.render(
  <Book
    title={'AdventOfCode'}
    logo={'Eric Wastl'}
    topics={allTopics}
  />, 
  document.getElementById('root')
)