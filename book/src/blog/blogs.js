import React from 'react'
import ReactMarkdown from 'react-markdown'
import Style from './BlogStyle'
import content from './md/art_of_war'

const Body = ({ src }) => (
  <Style>
    <ReactMarkdown source={src} />
  </Style>
)

const blogs = [
  { title: 'Blog', separator: true },
  {
    title: 'Art of War', stories: [{
      title: '第一部分',
      body: <Body src={content[0]} />
    }]
  }
]

export default blogs