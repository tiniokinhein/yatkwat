/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"

import Moment from 'react-moment'
import 'moment/locale/my'

import Header from "./header"
import "./layout.css"

import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"
import OwlCarousel from 'react-owl-carousel2'

const newDate = new Date();

const options = {
  items: 1,
  nav: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 350,
  dots: false,
  margin: 10
}

const Layout = ({ children, index }) => (
      <>
        <StaticQuery 
          query={graphql`
            query {
              allNodePosts(sort: {
                  fields: [
                    revision_timestamp
                  ],
                  order: DESC
                }) {
                edges{
                  node{
                    title
                    drupal_internal__nid
                    id
                    path {
                      alias
                    }
                  }
                }
              }
            }`
          } render={data => (
            <>
            <div className="top-header-area">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div id="breakingNewsTicker" className="ticker">
                      <OwlCarousel
                        className="owl-carousel"
                        options={options}>

                        {data.allNodePosts.edges.map(({node}, index) => (
                            <div className="item" key={index}>
                                <Link className="post-title" to={'/' + node.path.alias} dangerouslySetInnerHTML={{__html: node.title}} />
                            </div>
                        ))}
                        
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
          )}
        />
        <Header />
        <>
          <main key={index}>{children}</main>

          <footer className="footer-area">
                <div className="bottom-footer-area">
                    <div className="container h-100">
                        <div className="top-social-info-area">
                            <a href="https://facebook.com/MMYatKwat/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.instagram.com/myanmaryatkwat/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCa5CS8NOVc59ez0NlJMPtWA" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-youtube" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <p>
                                    <Link to={'/'}>ရပ်ကွက်</Link> မူပိုင်ခွင့် &copy; ၂၀၁၈ - &nbsp;
                                    <Moment format='YYYY' locale='my'>
                                        {newDate}
                                    </Moment>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <ScrollUpButton 
              StopPosition={0}
              ShowAtPosition={350}
              EasingType='easeOutCubic'
              AnimationDuration={600}
              style={{}}
              ToggledStyle={{right: 20}}
              ContainerClassName="ScrollUpButton__Container" 
              TransitionClassName="ScrollUpButton__Toggled">
            </ScrollUpButton>
        </>
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
