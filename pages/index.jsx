import Head from 'next/head'

import Layout from '../components/layout'
import { H1, P, Container, Section } from '../styles/content'

const Index = () => (
  <Layout title='Homepage'>
    <Section>
      <Container>
        <H1>Hello Next.js!</H1>
        <P>This is the index.js file</P>
      </Container>
    </Section>
  </Layout>
)

export default Index
