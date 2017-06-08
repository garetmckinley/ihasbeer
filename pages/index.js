import React from 'react'
import { LayoutProvider, Section, Container, Box } from 'hedron'
import Helmet from 'react-helmet'

import config from 'config'
import posts from 'posts'
import 'global'

import Header from 'components/Header'
import Link from 'components/Link'

const AllPosts = () => (
  <div>
    {posts.slice().reverse().map(post => (
      <Link key={post.url} to={post.url}>
        <pre>
          {JSON.stringify(post, null, 2)}
        </pre>
      </Link>
    ))}
  </div>
)

const Scaffolding = ({ url, ...props }) => {
  const Post = url.query.slug && url.query.slug !== ''
    ? require(`./posts/${url.query.slug}`).default
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
                  <Post />
                </Box>
              </Container>
            </Section>
          </Box>
        </Container>
      </Section>
    </LayoutProvider>
  );
}

export default Scaffolding