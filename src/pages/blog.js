import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'

import { graphql, useStaticQuery } from "gatsby"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "YYYY MMMM DD")
          }
        }
      }
    }
  `)

  const post = data.allContentfulBlogPost.edges

  console.log(post)

  return (
    <Layout>
      <Head title="Blog Posts" />
      <ol>
        {post.map(elem => {
          return (
            <li key={elem.node.id}>
              <Link to={`/blog/${elem.node.slug}`}>
                <h2>{elem.node.title}</h2> <p>{elem.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
