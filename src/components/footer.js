import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

export default function Footer() {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`)

const { author } = data.site.siteMetadata

  return (
    <footer>
      <p>Created by {author} 2019</p>
    </footer>
  )
}
