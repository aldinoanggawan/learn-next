import React from 'react'

import Layout from '../components/layout'
import { H1, Container, Section } from '../styles/content'

const Hello = () => (
  <Layout title='Hello'>
    <Section>
      <Container>
        <H1>Hi this is the hello page</H1>
      </Container>
    </Section>
  </Layout>
)

export default Hello
