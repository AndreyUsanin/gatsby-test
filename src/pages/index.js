import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


export default function index() {  return (

      <Layout>
        <Head title="Home Page" />
        <h1>Hello</h1>
        <h2>I'm dude fullstack developer!</h2>
        <p>Need a developer <Link to="/contact">Contact Me</Link></p>
      </Layout>
  )
}
