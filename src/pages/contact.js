import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function ContactPage() {
  return (
    <Layout>
      <h1>Contact Page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, dolore?</p>
      <p>Homepage <Link to="/">Home Page</Link></p>
      <p>Twitter: <a href="http://twitter.com">Link</a></p>
    </Layout>
  )
}
