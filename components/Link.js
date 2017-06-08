import styled from 'styled-components'

const A = styled.a`
  color: black;
  cursor: pointer;
  text-decoration: none;

  pre {
    opacity: .65;
    white-space: pre-wrap;
    word-wrap: break-word;
    &:hover {
      opacity: 1;
    }
  }
`

const Link = ({ to, ...props }) => (
  <A href={to} {...props} />
)

export default Link