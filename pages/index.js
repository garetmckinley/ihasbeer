import React from 'react'
import { LayoutProvider, Section, Container, Box } from 'hedron'
import Helmet from 'react-helmet'
import TypeWriter from 'react-typewriter'
import { withState } from 'recompose'

import config from 'config'
import posts from 'posts'
import 'global'

import Header from 'components/Header'
import Link from 'components/Link'
import Post from 'components/Post'
import TerminalText from 'components/TerminalText'

const AllPosts = ({ visible }) => {
  if (!visible) return null
  const sortedPosts = posts.slice().reverse()
  return (
    <div>
      <pre>
        <TerminalText
          links={sortedPosts.map((post, i) => ({
            url: post.url,
            start: 2 + i * 5,
            end: 4 + i * 5,
          }))}
          lines={JSON.stringify(sortedPosts, null, 2).split('\n')}
        />
      </pre>
    </div>
  )
}

const enhance = withState('doneTyping', 'setDoneTyping', false)

const Scaffolding = ({ url, doneTyping, setDoneTyping, ...props }) => {
  const Content = url.query.slug && url.query.slug !== ''
    ? () => <Post source={require(`./posts/${url.query.slug}`).default} />
    : AllPosts
  return (
    <LayoutProvider gutter="30px">
      <Section width="600px">
        <Helmet title={config.title} />
        <Container direction="vertical">
          <Header glitch="ihøs.bǝǝr">ihas.beer</Header>
          <Box fluid>
            <Section>
              <Container direction="vertical">
                <Box style={{ maxWidth: '100%' }}>
                  {!url.query.slug &&
                    <h2 style={{ fontFamily: 'monospace' }}>
                      &gt;&nbsp;
                      <TypeWriter
                        typing={1}
                        onTypingEnd={() => setDoneTyping(true)}
                        minDelay={30}
                        maxDelay={150}
                      >
                        cat ~/posts/all.json
                      </TypeWriter>
                    </h2>}
                  <Content visible={doneTyping} />
                </Box>
              </Container>
            </Section>
          </Box>
        </Container>
      </Section>
    </LayoutProvider>
  )
}

export default enhance(Scaffolding)
