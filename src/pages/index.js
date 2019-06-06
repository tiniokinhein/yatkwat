import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slide from '../components/slide'
import GridSlide from '../components/gridSlide'

import Moment from 'react-moment'
import Img from 'gatsby-image'


const IndexPage = ({ data, index }) => (
  <>
  <Layout>
    <SEO title="သတင္းမီဒီယာေအဂ်င္စီ" keywords={[`သတင္းမီဒီယာေအဂ်င္စီ`, `news in myanmar`, `news app`]} />

      <Slide key={index} />

      <GridSlide key={index} />

      <div className="viral-story-blog-post section-padding-0-60" key={index}>
        <div className="container">
          <div className="row row-custom">
            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                <Link to={'/category/7'} className="fr-post-list-link">
                  <h4 className="fr-header">
                    နိုင်ငံရေး
                  </h4>
                </Link>
                {data.politicsPost.edges.slice(0,4).map(({node}) => (
                      <>
                      <div className="single-blog-post style-3" key={node.id}>
                        <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                        </div>
                        <div className="post-data">
                            <div className="post-meta">
                                <p className="post-date fr-post-date">
                                    <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                        {node.revision_timestamp}
                                    </Moment>   
                                </p>
                            </div>
                            <Link to={node.path.alias} className="post-title">
                                <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                            </Link>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                <Link to={'/category/21'} className="fr-post-list-link">
                  <h4 className="fr-header">
                    အနုပညာ
                  </h4>
                </Link>
                {data.celebrityPost.edges.slice(0,4).map(({node}) => (
                      <>
                      <div className="single-blog-post style-3" key={node.id}>
                        <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                        </div>
                        <div className="post-data">
                            <div className="post-meta">
                                <p className="post-date fr-post-date">
                                    <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                        {node.revision_timestamp}
                                    </Moment>   
                                </p>
                            </div>
                            <Link to={node.path.alias} className="post-title">
                                <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                            </Link>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/10'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      ဖက်ရှင်
                    </h4>
                  </Link>
                  {data.fashionPost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/22'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      တေးဂီတ
                    </h4>
                  </Link>
                  {data.musicPost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/18'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      အစားအသောက်
                    </h4>
                  </Link>
                  {data.foodPost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/9'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      ပတ်ဝန်းကျင်
                    </h4>
                  </Link>
                  {data.environmentPost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/8'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      ပညာရေး
                    </h4>
                  </Link>
                  {data.educationPost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/19'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      အလှအပရေးရာ
                    </h4>
                  </Link>
                  {data.beautyPost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/15'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      လူနေမှုပုံစံ
                    </h4>
                  </Link>
                  {data.lifestylePost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/12'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      မှုခင်း
                    </h4>
                  </Link>
                  {data.crimePost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/17'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      ဟာသ
                    </h4>
                  </Link>
                  {data.funnyPost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/6'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      နည်းပညာ
                    </h4>
                  </Link>
                  {data.techPost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/1'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      ဝတ္ထု
                    </h4>
                  </Link>
                  {data.novelPost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/3'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      ကဗျာ
                    </h4>
                  </Link>
                  {data.poemPost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

            <div className="cat-blog-padding cat-blog-padding-custom col-12 col-sm-6 col-lg-4">
              <div className="fr-post-wrap">
                  <Link to={'/category/20'} className="fr-post-list-link">
                    <h4 className="fr-header">
                      အားကစား
                    </h4>
                  </Link>
                  {data.sportPost.edges.slice(0,4).map(({node}) => (
                    <>
                      <div className="single-blog-post style-3" key={node.id}>
                          <div className="post-thumb">
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
                                          <Img className="cat-list-img" fixed={node.relationships.field_post_image.localFile.childImageSharp.fixed} alt="" />
                                        </>
                                      }
                                    </>
                                  }
                                </>
                              }
                            </Link>
                          </div>
                          <div className="post-data">
                              <div className="post-meta">
                                  <p className="post-date fr-post-date">
                                      <Moment format="ddddနေ့, MMMMလ Dရက် YYYY" locale='my'>
                                          {node.revision_timestamp}
                                      </Moment>   
                                  </p>
                              </div>
                              <Link to={node.path.alias} className="post-title">
                                  <h6 dangerouslySetInnerHTML={{__html:node.title}}></h6>
                              </Link>
                          </div>
                        </div>
                    </>
                  ))}
                </div>
            </div>

          </div>
        </div>
      </div>
  </Layout>
  </>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allNodePosts(sort: {
        fields: [
          revision_timestamp
        ],
        order: DESC
      }) {
      edges{
        node{
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
                childImageSharp {
                  fixed(width: 960, height: 800) {
                    src
                    width
                    height
                      ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }

    politicsPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 7
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    celebrityPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 21
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    fashionPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 10
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    musicPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 22
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          revision_timestamp
          path {
            alias
          }
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    foodPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 18
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    environmentPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 9
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    educationPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 8
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    beautyPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 19
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    lifestylePost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 15
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    crimePost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 12
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    funnyPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 17
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    techPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 6
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    novelPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 1
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    poemPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 3
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

    sportPost: allNodePosts(filter: {
      relationships: {
        field_post_category: {
          elemMatch: {
            drupal_internal__tid: {
              eq: 20
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
      edges {
        node {
          id
          title
          drupal_internal__nid
          path {
            alias
          }
          revision_timestamp
          relationships {
            field_post_image {
              localFile {
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
          }
        }
      }
    }

  }
`