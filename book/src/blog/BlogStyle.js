import styled from 'styled-components'

const BlogStyle = styled.div`
  padding: 5px;
  font-family: Palatino, "Times New Rome";
  -webkit-font-smoothing: auto;
  font-size: 16px;
  line-height: 1.8;
  max-width: 650px;
  margin: 0 auto;
  h1, h2, h3 {
    font-weight: bold;
    margin: 1em 0;
  }
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.3em;
  }
  strong {
    font-weight: bold;
  }
  p, ul {
    font-size: 1.2em;
    margin: 1em 0;
  }
  blockquote {
    padding: 0 2em;
    border-left: 1px solid #ddd;
  }
  ul {
    margin-left: 2em;
    list-style-type: square;
  }
`

export default BlogStyle