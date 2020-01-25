import React from 'react'
import ReactMarkdown from 'react-markdown'
import DayStyle from './DayStyle'
import content from './md/2015'
import advanced from './md/advanced'

const days = [
  { title: 'Code', separator: true },
  {
    title: '2015', 
    stories: content.map((src, i) => ({
      title: i + 1,
      text: '',
      body: (
        <DayStyle>
          <ReactMarkdown source={src} />
        </DayStyle>
      )
    })) 
  },
  {
    title: 'Patterns', stories: [
      {
        title: 'Topological sorting',
        body:
          <DayStyle>
            <ReactMarkdown source={advanced[0]} />
          </DayStyle>
      }
    ]
  }
]

export default days