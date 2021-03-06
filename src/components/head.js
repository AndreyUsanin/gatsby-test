import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from 'gatsby'

export default function Head(props) {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }  
  `)

  return (
    <div>
      <Helmet title={`${props.title}  | ${data.site.siteMetadata.title}`} >
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      </Helmet>
    </div>
  )
}
