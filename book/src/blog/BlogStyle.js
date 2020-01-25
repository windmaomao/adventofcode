import styled from 'styled-components'

const BlogStyle = styled.div`
  -webkit-font-smoothing: auto;
  line-height: 1.8
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
  p {
    margin: 1em 0;
    width: 95%;
  }
  ul {
    margin-left: 2em;
    list-style-type: square;
  }
  code {
    border: 1px dashed gray;
  }
  img {
    margin: 0.5em 0;
    max-width: 90%;
  }
`

export default BlogStyle