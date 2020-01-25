import React from 'react'
import ReactMarkdown from 'react-markdown'
import DayStyle from './DayStyle'
import content from './md/2015'
import advanced from './md/patterns'

const Body = ({ src }) => (
  <DayStyle>
    <ReactMarkdown source={src} />
  </DayStyle>
)

const days = [
  { title: 'Code', separator: true },
  {
    title: '2015', 
    stories: content.map((src, i) => ({
      title: i + 1,
      text: '',
      body: <Body src={src} />
    })) 
  },
  {
    title: 'Patterns', stories: [{
      title: 'Topological sorting',
      body: <Body src={advanced[0]} />
    }]
  }
]

export default days