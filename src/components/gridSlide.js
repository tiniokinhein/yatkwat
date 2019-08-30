import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Moment from 'react-moment'
import 'moment/locale/my'

const GridSlide = ({index}) => (
    <>
        <StaticQuery
            query={graphql`
                query gridSlideQuery {
                    allNodePosts(sort: {
                            fields: [
                                revision_timestamp
                            ],
                            order: DESC
                        }) {
                        edges{
                            node{
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
                                }
                            }
                        }
                    }
                }
            `} render={data => (
                <>
                <div className="welcome-slide-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="welcome-slides">
                                    <div className="single-welcome-slide">
                                        <div className="row no-gutters">
                                            <div className="col-12 col-lg-8">
                                                <div className="welcome-post">
                                                    {data.allNodePosts.edges.slice(0,1).map(({node}) => (
                                                        <>
                                                        <Link className="a-dfg" to={'/' + node.path.alias}>
                                                            {
                                                                node.relationships &&
                                                                <>
                                                                {
                                                                    node.relationships.field_post_image &&
                                                                    <>
                                                                    <img key={index} className="dfg" src={node.relationships.field_post_image.localFile.url} alt="" />
                                                                    </>
                                                                }
                                                                </>
                                                            }
                                                        </Link>
                                                        <div className="post-content" data-animation="fadeInUp" data-duration="500ms" key={index}>
                                                            <Link to={'/category/' + node.relationships.field_post_category[0].drupal_internal__tid} className="cat-small">
                                                                { node.relationships.field_post_category[0].name }
                                                            </Link>
                                                            <Link to={'/' + node.path.alias} className="fr-slide-title">
                                                                <h1 dangerouslySetInnerHTML={{__html:node.title}} className="post-title"></h1>
                                                            </Link>
                                                            <p className="">
                                                                <Moment format="MMMMလ Dရက် YYYY" locale='my'>
                                                                    {node.revision_timestamp}
                                                                </Moment>
                                                            </p>
                                                        </div>
                                                        </>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4">
                                                {data.allNodePosts.edges.slice(1,3).map(({node}, index) => (
                                                    <div className="welcome-post welcome-posts--">
                                                        <Link className="a-dfg" to={'/' + node.path.alias}>
                                                            {
                                                                node.relationships &&
                                                                <>
                                                                {
                                                                    node.relationships.field_post_image &&
                                                                    <>
                                                                    <img key={index} className="dfg" src={node.relationships.field_post_image.localFile.url} alt="" />
                                                                    </>
                                                                }
                                                                </>
                                                            }
                                                        </Link>
                                                        <div className="post-content" data-animation="fadeInUp" data-duration="500ms" key={index}>
                                                            <Link to={'/category/' + node.relationships.field_post_category[0].drupal_internal__tid} className="cat-small">
                                                                { node.relationships.field_post_category[0].name }
                                                            </Link>
                                                            <Link to={'/' + node.path.alias} className="fr-slide-title">
                                                                <h1 dangerouslySetInnerHTML={{__html:node.title}} className="post-title"></h1>
                                                            </Link>
                                                            <p className="">
                                                                <Moment format="MMMMလ Dရက် YYYY" locale='my'>
                                                                    {node.revision_timestamp}
                                                                </Moment>
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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

export default GridSlide