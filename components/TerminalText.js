import styled from 'styled-components'

const Wrapper = styled.span`
  a, a:link {
    color: #000;
    text-decoration: none;
  }
`

class TerminalText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderedLines: 0,
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.renderedLines >= this.props.lines.length) {
        clearInterval(this.timer)
      }
      this.setRenderedLines((this.state.renderedLines += 1))
    }, 30)
  }
  setRenderedLines(renderedLines) {
    this.setState({ renderedLines })
  }
  render() {
    const { lines, links, ...props } = this.props
    const response = lines.slice(0, this.state.renderedLines)
    return (
      <Wrapper
        dangerouslySetInnerHTML={{
          __html: response
            .map((r, i) => {
              const link = links.find(l => l.start <= i && l.end >= i)
              return link ? `<a href="${link.url}">${r}</a>` : r
            })
            .join('\n'),
        }}
      />
    )
  }
}

export default TerminalText
