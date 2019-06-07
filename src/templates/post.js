import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import SEO from '../components/seo'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Moment from 'react-moment'
import OwlCarousel from 'react-owl-carousel2'
import ReactHtmlParser from 'react-html-parser'
import ImageZoom from 'react-medium-image-zoom'

import { FacebookShareButton, FacebookIcon } from 'react-share'

import { Location } from '@reach/router'

import HTMLEllipsis from 'react-lines-ellipsis/lib/html'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

const ResponsiveEllipsis = responsiveHOC()(HTMLEllipsis)

class PostTemplate extends Component {
  
  render() {
    const post = this.props.data.nodePosts
    const data = this.props.data

    const prev = this.props.pageContext.prev
    const next = this.props.pageContext.next

    const options = {
      nav: false,
      loop: true,
      autoplay: true,
      smartspeed: 600,
      dots: false,
      margin: 10,
      responsive: {
        0: {
          items: 1,
        },
        680: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1024: {
          items: 4,
        }

      }
    }

    return (
      <Layout>
        <SEO 
          title={ReactHtmlParser(post.title)} 
          keywords={[`gatsby`, `application`, `react`]} 
          key={post.id}
        />
        <div className="container">
          <div className="post post-list pl-nomargin pl-topmargin" key={post.id}>
            <p className="cat-name">
              {
                post.relationships.field_post_category[0] &&
                <Link to={'/category/' + post.relationships.field_post_category[0].drupal_internal__tid} className="cat-links cat-link-1">
                  {post.relationships.field_post_category[0].name}
                </Link>
              }
              &nbsp; &nbsp;
              {
                post.relationships.field_post_category[1] &&
                <Link to={'/category/' + post.relationships.field_post_category[1].drupal_internal__tid} className="cat-links cat-link-1">
                  {post.relationships.field_post_category[1].name}
                </Link>
              }
              &nbsp; &nbsp;
              {
                post.relationships.field_post_category[2] &&
                <Link to={'/category/' + post.relationships.field_post_category[2].drupal_internal__tid} className="cat-links cat-link-1">
                  {post.relationships.field_post_category[2].name}
                </Link>
              }

            </p>
            <h4 className="post-list-header" dangerouslySetInnerHTML={{__html:post.title}}></h4>
            
            <Location>
              {({location}) => {
                console.log(location)
                return(
                  <FacebookShareButton url={location.href} className="st-inline-share-buttons">
                    <FacebookIcon size={40} round />
                  </FacebookShareButton>
                )
              }}
            </Location>

          </div>
        </div>
        <div className="post post-list pl-img-row">
          {post.relationships &&
            <>
              {post.relationships.field_post_image && 
                <>
                  {post.relationships.field_post_image.localFile && 
                    <>
                      <Img className="post-list-img" fixed={post.relationships.field_post_image.localFile.childImageSharp.fixed} />
                    </>
                  }
                </>
              }
            </>
          }
        </div>
          <div className="container">
            <div className="post post-list pl-nomargin" key={post.id}>
                <span className="post-list-date">
                    <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                        {post.date}
                    </Moment>
                </span>
                {
                  post.body[0] &&
                  <p className="post-list-p" dangerouslySetInnerHTML={{__html: post.body[0].value }} />
                }
                
                  {
                    post.body[1] && 
                    <div className="video-wrapper" style={{textAlign: 'center', width: '640px', maxWidth: '100%', margin: '0 auto'}}>
                    <iframe
                      width='100%'
                      height='360'
                      src={post.body[1].value}
                      title={post.body[1].value}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen
                    />
                    </div>
                  }
                <div className="row ml-n1 mr-n1 mx-n1" style={{paddingTop: '25px'}}>
                    {
                      post.relationships.field_post_gallery_image && 
                        post.relationships.field_post_gallery_image.map(({localFile}) => (
                          <div className="col-4 col-sm-3 show-img-ft p-1 d-flex">
                            <div class="bg-white d-flex align-items-start">
                              <ImageZoom
                                image={{
                                  src: localFile.url,
                                  alt: '',
                                  className: 'show-img-al',
                                }}
                                zoomImage={{
                                  src: localFile.url,
                                  alt: ''
                                }}
                              />
                            </div>
                          </div>
                        ))
                    }
                </div>                
            </div>

            <div className="row nav-link-block">
              <div className="prevNext-links next-nav">
                  <div className="row pnLinks">
                    {/* <h4 className="nav-link-title">ရှေ့သို့ <em>(သတင်းသစ်)</em></h4> */}
                    <div className="prev-next-links-all">
                      {
                        prev &&
                        <div className="prev-next-links">
                          <Link to={prev.path.alias} className="prevNextLink-i">
                            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                          </Link>
                        </div>
                      }
                    </div>                    
                    <div className="item-wrapper">
                      <div className="item single-blog-post d-flex align-items-top">
                          <div className="post-thumb-img">
                            {prev &&
                              <Link to={prev.path.alias} className="prevNextLink">
                                  <img className="nav-img" src={prev.relationships.field_post_image.localFile.url} alt="" />
                              </Link>
                            }
                          </div>
                          <div className="post-data" style={{ width: '100%'}}>
                            {prev &&
                              <div className="post-data-wrapper">
                                <Link to={prev.path.alias} className="prevNextLink">
                                  <ResponsiveEllipsis
                                    unsafeHTML={prev.title}
                                    maxLine='1'
                                    ellipsis='...'
                                    className="prevNextTitle"
                                  />
                                </Link>
                                <div className="post-meta">
                                  <p className="post-date">
                                    <Moment format="MMMMလ Dရက် YYYY" locale="my" className="nav-time">
                                      {prev.revision_timestamp}
                                    </Moment>
                                  </p>
                                </div>
                              </div>
                            }
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="prevNext-links pre-nav">
                  <div className="row pnLinks">
                    {/* <h4 className="nav-link-title">နောက်သို့ <em>(သတင်းဟောင်း)</em></h4> */}
                    
                    <div className="item-wrapper">
                      <div className="item single-blog-post d-flex align-items-top">
                          <div className="post-data" style={{ width: '100%'}}>
                            {next &&
                              <div className="post-data-wrapper">
                                <Link to={next.path.alias} className="prevNextLink">
                                  <ResponsiveEllipsis
                                    unsafeHTML={next.title}
                                    maxLine='1'
                                    ellipsis='...'
                                    className="prevNextTitle"
                                  />
                                </Link>
                                <div className="post-meta">
                                  <p className="post-date">
                                    <Moment format="MMMMလ Dရက် YYYY" locale="my" className="nav-time">
                                      {next.revision_timestamp}
                                    </Moment>
                                  </p>
                                </div>
                              </div>
                            }
                          </div>
                          <div className="post-thumb-img">
                            {next &&
                              <Link to={next.path.alias} className="prevNextLink">
                                <img className="nav-img" src={next.relationships.field_post_image.localFile.url} alt="" />
                              </Link>
                            }
                          </div>
                      </div>
                    </div>
                    <div className="prev-next-links-all">
                      {
                        next &&
                        <div className="prev-next-links">
                          <Link to={next.path.alias} className="prevNextLink-i">
                            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                          </Link>
                        </div>
                      }
                    </div>
                  </div>
                </div>
            </div>

          <div className="latest-yt-post">
            <h4 className="fr-header lt-news">သတင်းသစ်များ</h4>
            <OwlCarousel
              className="owl-carousel owl-theme lt-owl-theme"
              options={options}
            >
            {data.allNodePosts.edges.slice(0,20).map(({node}) => (
              <div className="item" key={node.id}>
                <div className="item single-blog-post d-flex align-items-top">
                  <div className="row">
                    <div className="post-thumb-img col-6 col-sm-6">
                      <Link to={node.path.alias}>
                        {
                          node.relationships &&
                          <>
                            {
                              node.relationships.field_post_image && 
                              <>
                                {
                                  node.relationships.field_post_image.localFile &&
                                  <>
                                    <img className="dfg" src={node.relationships.field_post_image.localFile.url} alt="" />
                                  </>
                                }
                              </>
                            }
                          </>
                        }
                      </Link>
                    </div>
                    <div className="post-data col-6 col-sm-6">
                      <p className="cat-name">
                        <Link to={'/category/' + node.relationships.field_post_category[0].drupal_internal__tid}>
                          {node.relationships.field_post_category[0].name}
                        </Link>
                      </p>
                      <div className="post-meta">
                        <p className="post-date">
                          <Moment format="MMMMလ Dရက် YYYY" locale='my'>
                            {node.revision_timestamp}
                          </Moment>
                        </p>
                      </div>
                      <Link to={node.path.alias} className="post-title">
                        <h6 dangerouslySetInnerHTML={{__html: node.title.slice(0,50)}}></h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </OwlCarousel>
            </div>

        </div>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    nodePosts(id: { eq: $id }) {
      id
      path {
        alias
      }
      drupal_internal__nid
      title
      revision_timestamp
      body {
        value
      }
      relationships {
        field_post_category {
          id
          drupal_internal__tid
          name
        }
        field_post_image {
          uri {
            value
          }
          localFile {
            url
            childImageSharp {
              fixed(width: 960, height: 500) {
                src
                width
                height
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        field_post_gallery_image {
          localFile {
            url
            childImageSharp {
              fixed(width: 480, height: 480) {
                src
                width
                height
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }

    allNodePosts(sort: {
        fields: [
          revision_timestamp
        ],
        order: DESC
      }) {
      edges {
        node {
          drupal_internal__nid
          id
          path {
            alias
          }
          title
          revision_timestamp
          body {
            value
          }
          relationships {
            field_post_image {
              localFile {
                url
                childImageSharp {
                  fixed(width: 88, height: 138) {
                    src
                    width
                    height
                      ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            field_post_gallery_image {
              localFile {
                url
                childImageSharp {
                  fixed(width: 480, height: 480) {
                    src
                    width
                    height
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

  }
`