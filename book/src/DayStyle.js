import styled from 'styled-components'

const DayStyle = styled.div`
  font-family: "Source Code Pro", monospace;
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
  }
  ul {
    margin-left: 2em;
    list-style-type: square;
  }
  code {
    border: 1px dashed gray;
  }
`

export default DayStyle