import styled from 'styled-components'

const A = styled.a`
  color: black;
  cursor: pointer;
  text-decoration: none;

  pre {
    opacity: ${props => props.visible ? '.65' : '0'};
    white-space: pre-wrap;
    word-wrap: break-word;
    transition: opacity .2s ease-in;
    &:hover {
      opacity: ${props => props.visible ? '1' : '0'};
    }
  }
`

const Link = ({ to, visible = false, ...props }) => (
  <A href={to} visible={visible} {...props} />
)

export default Link