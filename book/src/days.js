import React from 'react'
import ReactMarkdown from 'react-markdown'
import DayStyle from './DayStyle'
import source from './days/01'

const days2015 = [
  {
    title: '01',
    text: 'Day 1: Not Quite Lisp',
    body: <DayStyle>
      <ReactMarkdown source={source} />
    </DayStyle>
  },
]

const days = [
  { title: 'Competition', separator: true },
  { title: '2015', stories: days2015 }
]

export default days