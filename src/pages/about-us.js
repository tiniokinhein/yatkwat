import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import { StaticQuery, graphql } from 'gatsby';

const AboutPage = () => (
    <Layout>
        <SEO title="About Us" />

        <StaticQuery
            query={graphql`
                query {
                    nodePages(drupal_internal__nid: {
                        eq: 88
                    }) {
                        title
                        drupal_internal__nid
                        body {
                            value
                        }
                    }
                }
            `} render = { data => (
                <>
                    <div className="viral-news-breadcumb-area section-padding-50 about-us">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <h3 dangerouslySetInnerHTML={{__html:data.nodePages.title}}></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-area section-padding-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-offset">
                                    <p dangerouslySetInnerHTML={{__html:data.nodePages.body.value}}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        />
    </Layout>
)

export default AboutPage