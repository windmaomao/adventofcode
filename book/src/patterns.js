import React from 'react'
import ReactMarkdown from 'react-markdown'
import DayStyle from './DayStyle'
import advanced from './md/advanced'

const days = [
  { title: 'Patterns', separator: true },
  { title: 'Advanced', stories: [
    { 
      title: 'Topological sorting', 
      body: 
        <DayStyle>
          <ReactMarkdown source={advanced[0]} />
        </DayStyle>
    }
  ]}
]

export default days