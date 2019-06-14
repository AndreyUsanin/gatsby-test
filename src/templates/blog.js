import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    publishedDate (formatString: "YYYY MMMM DD")
    body {
      json: json
    }
  }
  }
`



 function Blog(props) {

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return <img src={node.data.target.fields.file['en-US'].url} alt=""/>
      }
    }
  }

  
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <div>
        {documentToReactComponents( props.data.contentfulBlogPost.body.json, options)}
      </div>
    </Layout>
  )
}


export default Blog;