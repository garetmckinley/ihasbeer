import React from 'react'
import { LayoutProvider, Section, Container, Box } from 'hedron'
import Helmet from 'react-helmet'
import TypeWriter from 'react-typewriter';
import { withState } from 'recompose';

import config from 'config'
import posts from 'posts'
import 'global'

import Header from 'components/Header'
import Link from 'components/Link'
import Post from 'components/Post'

const AllPosts = ({ visible }) => (
  <div>
    {posts.slice().reverse().map(post => (
      <Link key={post.url} to={post.url} visible={visible}>
        <pre>
          {JSON.stringify(post, null, 2)}
        </pre>
      </Link>
    ))}
  </div>
)

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
                  {!url.query.slug && <h2 style={{ fontFamily: 'monospace' }}>&gt;&nbsp;
                    <TypeWriter typing={1} onTypingEnd={() => setDoneTyping(true)} minDelay={30} maxDelay={150}>
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
  );
}

export default enhance(Scaffolding)