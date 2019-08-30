import React, { Component } from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.nodePages

    return (
      <Layout>
        <SEO title={currentPage.title} />
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.body.value }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql `
  query currentPageQuery($id: String!) {
    nodePages(id: { eq: $id }) {
      title
      body {
        value
      }
      revision_timestamp(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`