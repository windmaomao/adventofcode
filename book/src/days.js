import React from 'react'
import ReactMarkdown from 'react-markdown'
import DayStyle from './DayStyle'
import content from './2015'

const days2015 = content.map((src, i) => ({
  title: i+1,
  text: '',
  body: (
    <DayStyle>
      <ReactMarkdown source={src} />
    </DayStyle>
  )
}))

const days = [
  { title: 'Competition', separator: true },
  { title: '2015', stories: days2015 }
]

export default days