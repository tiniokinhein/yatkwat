import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Moment from 'react-moment'
import Img from 'gatsby-image'
import OwlCarousel from 'react-owl-carousel2'

const options = {
    nav: false,
    // rewind: true,
    loop: true,
    autoplay: true,
    dots: false,
    margin: 10,
    responsive: {
        0: {
            items: 1,
        },
        680: {
            items: 2
        },
        992: {
            items: 3
        }
    }
}

const Slide = () => (
    <>
        <StaticQuery
            query={graphql`
                query{
                    gridSlidePost: allNodePosts(sort: {
                            fields: [
                                revision_timestamp
                            ],
                            order: DESC
                        }) {
                        edges {
                            node {
                                id
                                path {
                                    alias
                                }
                                drupal_internal__nid
                                title
                                revision_timestamp
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
                                            childImageSharp {
                                                fixed(width: 130, height: 130) {
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
            `} render={data => (
                <>
                <div className="fr-app">
                    <div className="hero-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="owl-slides">
                                        <OwlCarousel
                                            className="owl-carousel"
                                            options={options}>
                                                {data.gridSlidePost.edges.slice(3,50).map(({node}) => (
                                                    <div className="item" key={node.id}>
                                                        <div className="item single-blog-post d-flex align-items-center mb-50">
                                                            <div className="post-thumb">
                                                                <Link to={'/' + node.path.alias}>
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
                                                                <Link to={'/' + node.path.alias} className="post-title">
                                                                    <h6 dangerouslySetInnerHTML={{__html: node.title.slice(0,80)}}></h6>
                                                                </Link>
                                                                <div className="post-meta">
                                                                    <p className="post-date">
                                                                        <Moment format="MMMMလ Dရက် YYYY" locale='my'>
                                                                            {node.revision_timestamp}
                                                                        </Moment>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}
        />
    </>
)

export default Slide
