import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function AboutPage() {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        consequatur accusamus beatae error vero aliquam nam, officiis eos
        distinctio iusto?
      </p>
      <p>
        Need a developer <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}
