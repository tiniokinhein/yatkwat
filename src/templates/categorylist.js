import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
// import Helmet from "react-helmet"
import Layout from '../components/layout'
import Moment from 'react-moment'
import Img from 'gatsby-image'

import HTMLEllipsis from 'react-lines-ellipsis/lib/html'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

const ResponsiveEllipsis = responsiveHOC()(HTMLEllipsis)


class categoryTemplate extends Component {
  render() {
    const data = this.props.data
    const { pageContext } = this.props
    const { name } = pageContext
    return(
      <>
        <Layout>
          <SEO title={`${name}`} />
          <div className="viral-story-blog-post section-padding-0-50">
                <div className="catagory-featured-post section-padding-60-15">
                    <div className="container">
                      {data.allNodePosts.edges.slice(0,1).map(({node:post}) => (
                        <div className="row" key={post.id}>
                          
                          <div className="col-12 col-md-7">
                              <div className="cata-thumbnail">
                                {post.relationships &&
                                  <Link to={'/' + post.path.alias}>
                                    <Img className="cat-list-pt" fixed={post.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                  </Link>
                                }
                              </div>
                          </div>
                          <div className="col-12 col-md-5">
                              <div className="cata-content">
                                  <p className="cat-name">
                                      {post.relationships.field_post_category[0].name} 
                                      &nbsp; &nbsp;
                                      {
                                        post.relationships.field_post_category[1] &&
                                        <>
                                          {post.relationships.field_post_category[1].name}
                                        </>
                                      }                                      
                                      &nbsp; &nbsp;
                                      {
                                        post.relationships.field_post_category[2] &&
                                        <>
                                          {post.relationships.field_post_category[2].name}
                                        </>
                                      } 
                                  </p>
                                  <Link to={'/' + post.path.alias}>
                                      <h6 className="cat-header" dangerouslySetInnerHTML={{__html:post.title}}></h6>
                                  </Link>
                                  <div className="post-meta">
                                      <p className="post-date">
                                          <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                              {post.revision_timestamp}
                                          </Moment> 
                                      </p>
                                  </div>
                                      <ResponsiveEllipsis
                                          unsafeHTML={post.body[0].value}
                                          maxLine='9'
                                          ellipsis='...'
                                          />
                              </div>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
                <div className="container">
                  <div className="row row-custom">
                    {data.gridallNodePosts.edges.slice(1,60).map(({node:post}) => (
                        <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-3" key={post.id}>
                          <div className="single-blog-post cat-blog-post style-3" key={post.id}>
                              <div className="post-thumb">
                                <Link to={'/' + post.path.alias}>
                                  <Img className="cat-listpost" fixed={post.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                </Link>
                              </div>
                              <div className="post-data">
                                  <div className="post-meta">
                                      <p className="post-date">
                                          <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                              {post.revision_timestamp}
                                          </Moment> 
                                      </p>
                                  </div>
                                  <Link to={'/' + post.path.alias}>
                                      <h6 className="cat-post-list-title" dangerouslySetInnerHTML={{__html:post.title}}></h6>
                                  </Link>
                              </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
          </div>
        </Layout>
      </>
    )
  }
}

export default categoryTemplate

export const pageQuery = graphql`
  query CategoryPage($id: String!) {
    allNodePosts(filter: { 
      relationships: {
        field_post_category: { 
          elemMatch: {
            id: {
              eq: $id
            }
          } 
        } 
      }
    }, sort: {
    fields: [
      revision_timestamp
    ],
    order: DESC
    }) {
      totalCount
      edges {
        node {
          title
          drupal_internal__nid
          revision_timestamp
          id
          body {
            summary
            value
          }
          path {
            alias
          }
          relationships {
            field_post_image {
              localFile {
                url
                childImageSharp {
                  fixed(width: 900, height: 450) {
                    src
                    width
                    height
                      ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            field_post_category {
              name
              drupal_internal__tid
            }
          }
        }
      }
    }

    gridallNodePosts: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            id: {
              eq: $id
            }
          }
        }
      }
    }, sort: {
    fields: [
      revision_timestamp
    ],
    order: DESC
    }) {
      totalCount
      edges {
        node {
          title
          drupal_internal__nid
          revision_timestamp
          id
          body {
            summary
            value
          }
          path {
            alias
          }
          relationships {
            field_post_image {
              localFile {
                url
                childImageSharp {
                  fixed(width: 350, height: 200) {
                    src
                    width
                    height
                      ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            field_post_category {
              name
              drupal_internal__tid
            }
          }
        }
      }
    }

    taxonomyTermCategories {
      id
      name
    }
    
  }
`