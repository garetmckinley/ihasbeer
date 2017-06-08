import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const Wrapper = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin: 65px 0 45px 0;
  }

  img {
    max-width: 100%;
  }

  a, a:link {
    color: dodgerblue;
    transition: color .15s ease-out;
    &:hover {
      color: black;
    }
  }
`

const Markdown = ({ ...props }) => (
  <Wrapper>
    <ReactMarkdown {...props} />
  </Wrapper>
)

export default Markdown